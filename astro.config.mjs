// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://greenfresh.co.id',
  trailingSlash: 'always',
  
  // Tambahkan baris ini agar otomatis redirect di local development
  redirectTrailingSlash: true,

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), react(), vue()]
});