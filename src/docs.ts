import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

/**
 * The pages of the user guide of a language, in reading order.
 *
 * A page is src/content/docs/<lang>/<slug>.md; its id is "<lang>/<slug>".
 * Both languages use the same slugs, so the language switch of the header
 * finds the same page in the other language.
 */
export async function docsOf(lang: Lang): Promise<CollectionEntry<'docs'>[]> {
  const all = await getCollection('docs', (e) => e.id.startsWith(`${lang}/`));
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function slugOf(entry: CollectionEntry<'docs'>): string {
  return entry.id.split('/').slice(1).join('/');
}

/** Routes of src/pages/(fr/)docs/[...slug].astro; /docs/ itself lists the pages. */
export async function docPaths(lang: Lang) {
  const list = await docsOf(lang);
  return [
    { params: { slug: undefined }, props: { id: null } },
    ...list.map((e) => ({ params: { slug: slugOf(e) }, props: { id: e.id } })),
  ];
}
