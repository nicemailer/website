// The list of the site's pages for search engines, at /sitemap.xml
// (named in public/robots.txt). Each page is given with its translation
// (`xhtml:link hreflang`), so that a search in French finds the French page.
//
// Written by hand rather than with @astrojs/sitemap: the site has a dozen
// pages, all known here, and one dependency less.
import type { APIRoute } from 'astro';
import { docsOf, slugOf } from '../docs';
import { href } from '../i18n';

export const GET: APIRoute = async ({ site }) => {
  const paths = ['/', '/features/', '/docs/', '/changelog/', '/privacy/'];
  for (const doc of await docsOf('en')) paths.push(`/docs/${slugOf(doc)}/`);

  const url = (path: string) => new URL(path, site).href;
  const entries = paths.map((path) => {
    const en = url(href('en', path));
    const fr = url(href('fr', path));
    const alternates =
      `    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>\n` +
      `    <xhtml:link rel="alternate" hreflang="fr" href="${fr}"/>\n`;
    return [en, fr].map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alternates}  </url>`).join('\n');
  });

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    entries.join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
