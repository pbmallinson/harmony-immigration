# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Marketing website for **Harmony Immigration Ltd** — a licensed NZ & Australian immigration advisory firm. The site is multilingual (EN/HU/IT/DE), static, and deployed on Cloudflare Pages.

**Domain:** harmony-immigration.com  
**Founder:** Dr Edit Fellner-Andrejkovics — LIA #202001046 (NZ), MARN #2418597 (AU)

---

## Commands

```bash
npm run dev       # local dev server
npm run build     # static build (no adapter locally — see adapter note below)
npm run preview   # preview built output
npm run check     # TypeScript + Astro type check
```

---

## Tech stack

- **Framework:** Astro 6, static output (`output: 'static'`)
- **Styles:** Tailwind CSS v4 via `@tailwindcss/vite` plugin + `src/styles/global.css`
- **Fonts:** Fraunces (display/headings) + Plus Jakarta Sans (body) via Google Fonts `<link>` in `Base.astro` — not CSS `@import`
- **Deployment:** Cloudflare Pages, auto-deploys from production branch

**Cloudflare adapter note:** `@astrojs/cloudflare` is only activated in CI (`CF_PAGES === '1'`). Local builds use pure static output — no adapter, no miniflare.

---

## Architecture

### Internationalisation

All public pages live under `src/pages/[lang]/`. Astro's built-in i18n routing handles the `/en/`, `/hu/`, `/it/`, `/de/` prefixes; `prefixDefaultLocale: true` means `/en/` is the canonical default (there is a redirect from `/` to `/en/`). Fallback for HU/IT/DE is EN.

Translation strings live in `src/i18n/ui.ts` — a single typed `ui` record keyed by locale then string key. Usage pattern in every page/component:

```astro
---
import { getLangFromUrl, useTranslations } from '@i18n/utils';
const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
<h1>{t('hero.tagline')}</h1>
```

Helper functions in `src/i18n/utils.ts`: `getLangFromUrl`, `useTranslations`, `getLocalePath`, `getAlternateUrls`.

When adding new UI strings, add the key to all four locales in `ui.ts`. The `t()` function falls back to EN if a key is missing in another locale.

### Content collections (Astro Content Layer)

Defined in `src/content.config.ts` using Astro 6's Content Layer API (`glob`/`file` loaders). Collections:

| Collection | Source | Notes |
|---|---|---|
| `blog` | `src/data/blog/{locale}/*.{md,mdx}` | `locale` field in frontmatter |
| `events` | `src/data/events/{locale}/*.{md,mdx}` | `locale` field, `draft` flag |
| `visas` | `src/data/visas/{locale}/*.{md,mdx}` | `slug` field required, `country: nz\|au\|both` |
| `services` | `src/data/services/{locale}/*.{md,mdx}` | `slug` field required, `featured` flag |
| `team` | `src/data/team/*.{md,mdx}` | Not locale-split; `order` controls display |
| `testimonials` | `src/data/testimonials/reviews.json` | Loaded with `file()` loader |

Content is locale-split by directory (e.g. `src/data/visas/en/`, `src/data/visas/hu/`), with a `locale` frontmatter field for filtering in page queries.

### Layout hierarchy

```
Base.astro       ← <html>, <head>, SEO meta, hreflang, OG, JSON-LD, fonts
  Page.astro     ← wraps Base + adds Nav + Footer (used by all public pages)
  BlogPost.astro ← wraps Base + adds Nav + Footer + article chrome
```

`Base.astro` accepts `translations` (a `Partial<Record<Lang, string>>` of alternate-locale URLs) for hreflang tags. Pass this from every page using `getAlternateUrls()`.

### Structured data / schema

`src/lib/schema.ts` exports `LOCAL_BUSINESS_SCHEMA` (injected on every page via `Base.astro`) and `PERSON_SCHEMA` (used on about page). Also exports `SITE_URL = 'https://harmony-immigration.com'`.

### Path aliases (tsconfig)

```
@components/*  → src/components/*
@layouts/*     → src/layouts/*
@i18n/*        → src/i18n/*
@lib/*         → src/lib/*
@styles/*      → src/styles/*
```

---

## Content authoring

- **Visas and services** require a `slug` field in frontmatter — this is used to build the URL and must be unique within the locale.
- **Blog posts** authored primarily in English; translations go in the matching locale directory with the same filename.
- **Team members** are not locale-split — they display in whatever language the page is in, so keep `name` and `role` in English or the primary language.
- `draft: true` hides content from listing pages; content is still built (not filtered at build time) so don't put sensitive drafts in the repo.
