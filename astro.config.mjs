import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://johnnywattsagency.com',
  integrations: [sitemap()],
  vite: {
    server: {
      host: true,
      allowedHosts: true,
    },
    plugins: [tailwindcss()],
  },
});
