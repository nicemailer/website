// The release notes as an RSS feed, at /changelog.xml: a way to follow
// NiceMailer without an account, a newsletter or a social network. One item
// per released version of src/changelog.md ("Unreleased" is left out: it
// changes until the release).
//
// TypeScript note: importing a Markdown file gives, besides its component,
// `compiledContent()`, its HTML. The feed cuts it at each <h2>, the title of
// a version ("0.2.1 — 2026-11-21"), whose id is also its anchor on /changelog/.
import type { APIRoute } from 'astro';
import { compiledContent } from '../changelog.md';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const html = await compiledContent();
  const page = new URL('/changelog/', site).href;
  const items: string[] = [];
  // Each match: the anchor, the title, then the HTML up to the next version.
  const version = /<h2 id="([^"]+)">(.*?)<\/h2>([\s\S]*?)(?=<h2 |$)/g;
  for (const [, id, title, body] of html.matchAll(version)) {
    const date = title.match(/(\d{4}-\d{2}-\d{2})\s*$/);
    if (!date) continue; // "Unreleased"
    items.push(
      [
        '    <item>',
        `      <title>NiceMailer ${escape(title.replace(/<[^>]+>/g, ''))}</title>`,
        `      <link>${page}#${id}</link>`,
        `      <guid isPermaLink="true">${page}#${id}</guid>`,
        `      <pubDate>${new Date(`${date[1]}T12:00:00Z`).toUTCString()}</pubDate>`,
        `      <description>${escape(body.trim())}</description>`,
        '    </item>',
      ].join('\n'),
    );
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NiceMailer releases</title>
    <link>${page}</link>
    <atom:link href="${new URL('/changelog.xml', site).href}" rel="self" type="application/rss+xml"/>
    <description>What changes in NiceMailer, the email client for the Mac, release by release.</description>
    <language>en</language>
${items.join('\n')}
  </channel>
</rss>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
