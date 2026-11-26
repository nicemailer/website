// Copies the release notes of the app (CHANGELOG.md of the app repository)
// into src/changelog.md, without the guidance for contributors that precedes
// the first release section. Run it after each release, then commit:
//
//   npm run sync-changelog                      # app repository in ../niceMailer
//   NICEMAILER_REPO=/path/to/app npm run sync-changelog
import fs from 'node:fs';
import path from 'node:path';

const repo = process.env.NICEMAILER_REPO ?? path.resolve('..', 'niceMailer');
const source = path.join(repo, 'CHANGELOG.md');
const text = fs.readFileSync(source, 'utf8');
if (/^(<{7}|>{7}|={7})/m.test(text)) {
  console.error(`${source} has merge conflict markers: resolve them first.`);
  process.exit(1);
}
const start = text.search(/^## /m);
if (start < 0) {
  console.error(`${source} has no "## " section.`);
  process.exit(1);
}
// An empty "Unreleased" section (just after a release) is left out: it would
// show as a bare heading on /changelog/.
const body =
  text
    .slice(start)
    .replace(/^## Unreleased[ \t]*\n\s*(?=^## )/m, '')
    .trimEnd() + '\n';
fs.writeFileSync('src/changelog.md', body);
console.log(`src/changelog.md: ${body.split('\n').length} lines from ${source}`);
