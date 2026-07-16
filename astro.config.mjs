// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://webnova.example.com', // Update to your domain or GitHub Pages URL
  // For GitHub Pages project site (e.g. username.github.io/webnova), set:
  // base: '/webnova',
  // For custom domain or root user site, leave base as '/' (default)
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
