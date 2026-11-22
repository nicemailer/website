# nicemailer.org

The website of [NiceMailer](https://github.com/nicemailer/nicemailer), a fast, calm and trustworthy email client for macOS. A static site built with [Astro](https://astro.build), in English and French, published on GitHub Pages.

No cookies, no analytics, no request to any other site: the fonts are served by the site itself, and the download button is resolved at build time.

## Work on it

```sh
npm install
npm run dev          # http://localhost:4321, French at /fr/
npm run build        # the site in dist/
npm run preview      # serves dist/
```

## Where things are

| Path | Content |
| --- | --- |
| `src/i18n/en.ts`, `src/i18n/fr.ts` | Every string of the home page and of the frame, in each language. TypeScript fails the build if a key is missing in French |
| `src/components/Home.astro` | The home page, the same for both languages |
| `src/content/pages/<lang>/` | Features and Privacy, in Markdown |
| `src/content/docs/<lang>/` | The user guide, one Markdown file per page; `order` sets its place. Both languages use the same file names, so the language switch finds the same page |
| `src/changelog.md` | The release notes, copied from the app (below) |
| `src/assets/screens/<lang>/` | The screenshots, made from the demo mailbox (below); Astro publishes them as WebP |
| `src/release.ts` | Finds the disk image of the latest release, at build time |
| `src/styles/global.css` | Colours (from the app icon), type, and the Markdown pages |
| `public/` | The icon, `og.png` and `og-fr.png` (the images shown when a link is shared, made by `scripts/make-og.mjs`), `robots.txt`, `CNAME` |
| `src/pages/sitemap.xml.ts`, `src/pages/changelog.xml.ts` | The sitemap for search engines, and the release notes as an RSS feed |

## After each release of the app

1. **Release notes**: `npm run sync-changelog` copies `CHANGELOG.md` of the app repository (`../niceMailer`, or `NICEMAILER_REPO`) into `src/changelog.md`. Commit it.
2. **Download button**: nothing to do. The workflow rebuilds the site every day and reads the latest release; run it by hand (Actions › Deploy › Run workflow) to update at once.
3. **Screenshots**: when the interface changed, make them again (below) and commit them.

## Screenshots: the demo mailbox

The screenshots are never taken from a real mailbox. `demo/make-screens.sh` builds an invented one and photographs it with the real app:

```sh
demo/make-screens.sh          # both languages; or: demo/make-screens.sh en
```

It needs the app repository next to this one (or `NICEMAILER_REPO`), its build tools (Rust, Xcode), Python 3 and Docker. For each language it:

1. writes the demo mailbox (`demo/generate.py`, content in `demo/content_en.py` and `demo/content_fr.py`): an Inbox, conversations with quotes and signatures, newsletters with tracking pixels, invoices, two years of archives, and new mail to screen, among them a forged bank alert;
2. puts its history on a new user of the test IMAP server of the app repository (`make imap-up`, started if needed);
3. starts a core of its own (its own data folder and throwaway keychain file, nothing sent), adds the account and lets it synchronize;
4. delivers the new mail, which the core screens as it would real mail: Quarantine, the forged alert, known people to the Inbox;
5. plays `demo/screens.uiscript` in the app's UI script mode (off screen, away from the keyboard, in that language) and copies the snapshots to `src/assets/screens/<lang>/`.

It then makes the share images, `public/og.png` and `public/og-fr.png`, with `node scripts/make-og.mjs` (Google Chrome photographs a small HTML page: the icon, the name, the tagline and the Inbox). Run it alone after changing the tagline.

Your own mailbox, settings and Keychain are never touched. To change what a screenshot shows, change the content files or the scenario; the scenario language is described in `apps/NiceMailer/UITests/README.md` of the app repository.

## Publishing

`.github/workflows/deploy.yml` builds and publishes on each push to `main`, once a day, and by hand. In the repository settings, Pages › Source must be **GitHub Actions**, and the custom domain `nicemailer.org` (also in `public/CNAME`).
