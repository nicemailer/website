// @ts-check
import { defineConfig } from 'astro/config';

// The site is static HTML, served by GitHub Pages at nicemailer.org
// (public/CNAME). English is at the root, French under /fr/.
export default defineConfig({
  site: 'https://nicemailer.org',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
  markdown: {
    // Code blocks follow the light or dark mode of the page (global.css).
    shikiConfig: {
      themes: { light: 'github-light-high-contrast', dark: 'github-dark' },
    },
  },
});
