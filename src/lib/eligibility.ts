export type Visa = { country: string; name: string };

export function eligibilityHref(visas: Visa[], family: string, backHref: string, backLabel: string): string {
  const countries = [...new Set(visas.map((v) => v.country))];
  const params = new URLSearchParams({
    family,
    country: countries.length > 1 ? 'Both' : countries[0],
    visa: visas.map((v) => v.name).join(' | '),
    from: backHref,
    label: `Back to ${backLabel}`,
  });
  return `/check-eligibility?${params.toString()}`;
}
