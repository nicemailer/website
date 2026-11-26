/**
 * The themes the screenshots are made in (`demo/make-screens.sh`), in the
 * order of the switch under the main screenshot. The first is the app's
 * default, shown until the visitor chooses another.
 *
 * The choice is kept in the browser only (`localStorage`, key `shotTheme`),
 * never sent anywhere, and set on <html> as `data-shot-theme` before the
 * page is drawn (src/layouts/Base.astro), so a returning visitor does not
 * see the default theme flash first.
 */
export const SHOT_THEMES = ['clean', 'regular', 'geek', 'minimal'] as const;
export type ShotTheme = (typeof SHOT_THEMES)[number];
export const DEFAULT_SHOT_THEME: ShotTheme = SHOT_THEMES[0];
export const SHOT_THEME_KEY = 'shotTheme';

/** The name shown on the switch: the app's own names, never translated. */
export const SHOT_THEME_NAMES: Record<ShotTheme, string> = {
  clean: 'Clean',
  regular: 'Regular',
  geek: 'Geek',
  minimal: 'Minimal',
};
