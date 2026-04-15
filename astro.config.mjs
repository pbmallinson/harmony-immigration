// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The @astrojs/cloudflare adapter is added in Cloudflare Pages CI via env var.
// Locally we use pure static output (no adapter needed for SSG builds).
const isCI = process.env.CF_PAGES === '1';

const config = defineConfig({
  site: 'https://harmony-immigration.com',
  output: 'static',

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-NZ',
          hu: 'hu-HU',
          it: 'it-IT',
          de: 'de-DE',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hu', 'it', 'de'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
    fallback: {
      hu: 'en',
      it: 'en',
      de: 'en',
    },
  },

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto',
  },
});

export default config;
