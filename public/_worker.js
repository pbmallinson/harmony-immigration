// Cloudflare Pages "Advanced Mode" worker.
//
// This single file controls every request to the deployed site: static
// pages/assets fall straight through to Pages' own asset server, and
// POST /api/submit-assessment is handled here.
//
// On a submitted assessment it does two things:
//   1. Asks the ReferenceCounter Durable Object for the next sequence number
//      for today's date (NZ time), and formats it as HI-DDMMYYYY-###. The
//      Durable Object processes requests one at a time, so two submissions
//      arriving at the same moment can never be given the same number, and
//      the count starts fresh (001) the first time a new date is used.
//   2. Emails the submission (with the reference number) to the adviser
//      inbox, and a confirmation copy to the visitor, via Resend — but only
//      once RESEND_API_KEY is configured as a Cloudflare Pages environment
//      variable. Until that key is added, submissions still get a reference
//      number allocated; they just are not emailed yet. Add the key in the
//      Cloudflare Pages dashboard (Settings → Environment variables) or with
//      `wrangler pages secret put RESEND_API_KEY`, never in this file or in
//      wrangler.toml.

export class ReferenceCounter {
  constructor(state) {
    this.state = state;
  }

  async fetch(request) {
    const { dateKey } = await request.json();
    const count = (await this.state.storage.get(dateKey)) ?? 0;
    const next = count + 1;
    await this.state.storage.put(dateKey, next);
    return new Response(JSON.stringify({ count: next }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function pad3(n) {
  return String(n).padStart(3, '0');
}

// "Today" in NZ time, as a DDMMYYYY key the Durable Object counts against.
// Using Pacific/Auckland (rather than the server's UTC clock) means the
// day rolls over, and the counter resets to 001, at NZ midnight.
function nzDateKey() {
  const parts = new Intl.DateTimeFormat('en-NZ', {
    timeZone: 'Pacific/Auckland',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  return `${get('day')}${get('month')}${get('year')}`;
}

async function nextReference(env) {
  const dateKey = nzDateKey();
  const id = env.REF_COUNTER.idFromName(dateKey);
  const stub = env.REF_COUNTER.get(id);
  const res = await stub.fetch('https://reference-counter/increment', {
    method: 'POST',
    body: JSON.stringify({ dateKey }),
  });
  const { count } = await res.json();
  return `HI-${dateKey}-${pad3(count)}`;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

function renderAdviserEmail(payload, reference) {
  const sections = Object.entries(payload.answers ?? {})
    .map(([section, qa]) => {
      const rows = Object.entries(qa)
        .map(
          ([q, a]) =>
            `<tr><td style="padding:4px 12px 4px 0; color:#123B57; vertical-align:top;">${escapeHtml(q)}</td><td style="padding:4px 0; color:#123B57;">${escapeHtml(a)}</td></tr>`,
        )
        .join('');
      return `<h3 style="margin:20px 0 6px; color:#123B57;">${escapeHtml(section)}</h3><table>${rows}</table>`;
    })
    .join('');

  return `
    <div style="font-family:sans-serif; color:#123B57;">
      <p style="font-size:14px; font-weight:600; color:#55BFC0;">Assessment Reference Number: ${reference}</p>
      <h2 style="margin:0 0 12px;">New eligibility assessment</h2>
      <p>
        <strong>Name:</strong> ${escapeHtml(payload.client?.name)}<br/>
        <strong>Email:</strong> ${escapeHtml(payload.client?.email)}<br/>
        <strong>Country:</strong> ${escapeHtml(payload.pathway?.country)}<br/>
        <strong>Visa:</strong> ${escapeHtml(payload.pathway?.visa)}<br/>
        <strong>Pathway:</strong> ${escapeHtml(payload.pathway?.family)}
      </p>
      ${sections}
    </div>
  `;
}

function renderVisitorEmail(payload, reference) {
  const name = payload.client?.name ? `, ${escapeHtml(payload.client.name)}` : '';
  return `
    <div style="font-family:sans-serif; color:#123B57;">
      <p style="font-size:14px; font-weight:600; color:#55BFC0;">Assessment Reference Number: ${reference}</p>
      <h2 style="margin:0 0 12px;">Thank you${name}.</h2>
      <p>We've received your assessment. One of our advisers will review what you told us and get back to you within 2 working days.</p>
      <p>Please keep this reference number for your records.</p>
    </div>
  `;
}

async function sendViaResend(env, { to, subject, html }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.RESEND_FROM_EMAIL || 'Harmony Immigration <noreply@harmony-immigration.com>',
      to,
      subject,
      html,
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Resend API error ${res.status}: ${text}`);
  }
}

async function handleSubmitAssessment(request, env) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), { status: 400 });
  }

  const reference = await nextReference(env);

  if (env.RESEND_API_KEY) {
    try {
      await sendViaResend(env, {
        to: payload.to || 'info@harmony-immigration.com',
        subject: `New assessment ${reference} — ${payload.client?.name ?? ''}`,
        html: renderAdviserEmail(payload, reference),
      });
      if (payload.client?.email) {
        await sendViaResend(env, {
          to: payload.client.email,
          subject: `We've received your assessment — ${reference}`,
          html: renderVisitorEmail(payload, reference),
        });
      }
    } catch (err) {
      // The reference number has already been allocated. Log the email
      // failure but don't fail the request over it — the visitor still has
      // their reference number and the adviser can be reached directly.
      console.error('[submit-assessment] Resend send failed', err);
    }
  } else {
    console.warn('[submit-assessment] RESEND_API_KEY not set — skipping email send; reference number still generated.');
  }

  return new Response(JSON.stringify({ reference }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/submit-assessment' && request.method === 'POST') {
      try {
        return await handleSubmitAssessment(request, env);
      } catch (err) {
        console.error('[submit-assessment] unexpected error', err);
        return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
      }
    }
    // Everything else falls through to the static site.
    return env.ASSETS.fetch(request);
  },
};
