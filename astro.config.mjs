import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import inline from '@playform/inline';

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
    // Beasties: extract above-fold critical CSS, inline it, keep stylesheets
    // as plain synchronous <link rel="stylesheet"> so we never ship a layout
    // that differs from the final (eliminates CLS from missed arbitrary-value
    // Tailwind classes). pruneSource:false ensures Beasties does not strip
    // rules from the external stylesheet.
    inline({ Beasties: { pruneSource: false, preload: false } }),
  ],
  build: {
    // Let Beasties handle critical inlining; keep auto for the rest.
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
