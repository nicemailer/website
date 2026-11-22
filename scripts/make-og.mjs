// Makes the images shown when a link to the site is shared (og:image,
// 1200 x 630): public/og.png in English, public/og-fr.png in French.
//
// Each image is a small HTML page (the icon, the name, the tagline, a
// screenshot of the Inbox) photographed by Chrome without a window. HTML
// rather than sharp alone: sharp draws text with the fonts of the system,
// and the site's fonts (Space Grotesk, Source Sans 3) are not installed
// there, only in node_modules.
//
//   node scripts/make-og.mjs        (run by demo/make-screens.sh too)
//
// It needs Google Chrome in /Applications, or its path in CHROME.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(chrome)) {
  console.error(`Google Chrome not found at ${chrome}; set CHROME to its path.`);
  process.exit(1);
}

const url = (path) => pathToFileURL(join(root, path)).href;
const font = (pkg, file) => url(`node_modules/@fontsource/${pkg}/files/${file}`);

// The words of each image. The tagline is the title of the home page
// (src/i18n/*.ts, hero.title); the second line says what the app is, for
// someone who sees the image without the page.
const images = [
  {
    out: 'public/og.png',
    shot: 'src/assets/screens/en/inbox-light.png',
    tagline: 'Fast to use. Calm to live with. Yours to keep.',
    what: 'A free and open-source email client for the Mac',
  },
  {
    out: 'public/og-fr.png',
    shot: 'src/assets/screens/fr/inbox-light.png',
    tagline: 'Rapide. Reposant. Sécurisant.',
    what: 'Un client mail libre et gratuit pour Mac',
  },
];

const page = ({ shot, tagline, what }) => `<!doctype html>
<meta charset="utf-8">
<style>
  @font-face { font-family: 'Space Grotesk'; font-weight: 700; src: url(${font('space-grotesk', 'space-grotesk-latin-700-normal.woff2')}); }
  @font-face { font-family: 'Source Sans 3'; font-weight: 400; src: url(${font('source-sans-3', 'source-sans-3-latin-400-normal.woff2')}); }
  /* Colours of global.css (light): background, ink, ink-2, leaf. */
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #f2f5ef; }
  body { position: relative; font-family: 'Source Sans 3', sans-serif; color: #1b281e; }
  .text { position: absolute; left: 72px; top: 72px; width: 470px; }
  .brand { display: flex; align-items: center; gap: 16px; font-family: 'Space Grotesk'; font-weight: 700; font-size: 40px; letter-spacing: -0.01em; }
  .brand img { width: 76px; height: 76px; margin: -7px; }
  h1, p { text-wrap: balance; }
  h1 { margin: 64px 0 0; font-family: 'Space Grotesk'; font-weight: 700; font-size: 58px; line-height: 1.04; letter-spacing: -0.035em; }
  p { margin: 28px 0 0; font-size: 27px; line-height: 1.3; color: #4b5b4d; }
  .shot { position: absolute; left: 600px; top: 72px; width: 840px; border-radius: 14px; border: 1px solid rgba(27, 40, 30, 0.14);
          box-shadow: 0 24px 60px rgba(27, 40, 30, 0.18); }
  .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 10px; background: #8aa581; }
</style>
<div class="text">
  <div class="brand"><img src="${url('public/icon.svg')}" alt="">NiceMailer</div>
  <h1>${tagline}</h1>
  <p>${what}</p>
</div>
<img class="shot" src="${url(shot)}" alt="">
<div class="bar"></div>
`;

const dir = mkdtempSync(join(tmpdir(), 'nicemailer-og-'));
try {
  for (const image of images) {
    if (!existsSync(join(root, image.shot))) {
      console.error(`${image.shot} is missing: run demo/make-screens.sh first.`);
      process.exit(1);
    }
    const html = join(dir, 'og.html');
    writeFileSync(html, page(image));
    // Chrome sometimes writes the shot but does not quit: the timeout ends
    // it, and the image is checked rather than the exit status.
    rmSync(join(root, image.out), { force: true });
    try {
      execFileSync(chrome, [
        '--headless=new',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        '--window-size=1200,630',
        '--virtual-time-budget=3000', // lets the fonts and images load first
        '--allow-file-access-from-files',
        `--user-data-dir=${join(dir, 'profile')}`,
        `--screenshot=${join(root, image.out)}`,
        pathToFileURL(html).href,
      ], { stdio: 'ignore', timeout: 30_000 });
    } catch {}
    if (!existsSync(join(root, image.out))) {
      console.error(`Chrome did not write ${image.out}.`);
      process.exit(1);
    }
    console.log(`${image.out} updated`);
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}
