import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://johnnywattsagency.com',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url.includes('/blog/') && !item.url.endsWith('/blogs/')) {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
        if (item.url.endsWith('/blogs/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        return { ...item, changefreq: 'monthly', priority: 0.6, lastmod: new Date().toISOString() };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  server: {
    port: 4331,
    host: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
    plugins: [tailwindcss()],
  },
});
