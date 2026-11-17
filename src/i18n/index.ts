import en from './en';
import fr from './fr';

// TypeScript note: `typeof en` is the type of the English object; fr.ts is
// declared with it, so a key missing or misspelled in French fails the build.
export type Strings = typeof en;
export type Lang = 'en' | 'fr';

export const languages: Lang[] = ['en', 'fr'];

export function t(lang: Lang): Strings {
  return lang === 'fr' ? fr : en;
}

/** A path of the site in a language: `/docs/` in English, `/fr/docs/` in French. */
export function href(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === 'fr' ? `/fr${clean === '/' ? '/' : clean}` : clean;
}

/** The same page in the other language. */
export function switchLang(lang: Lang, pathname: string): string {
  if (lang === 'fr') {
    const rest = pathname.replace(/^\/fr(\/|$)/, '/');
    return rest || '/';
  }
  return `/fr${pathname === '/' ? '/' : pathname}`;
}

export const REPO = 'https://github.com/nicemailer/nicemailer';
export const ISSUES = `${REPO}/issues`;
