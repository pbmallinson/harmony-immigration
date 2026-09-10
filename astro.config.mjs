// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const config = defineConfig({
  site: 'https://www.harmony-immigration.com',
  output: 'static',

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
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
