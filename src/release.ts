import { REPO } from './i18n';

export interface Release {
  /** "0.1.0", or null when the latest release could not be read. */
  version: string | null;
  /** The disk image of the latest release, or its page as a fallback. */
  url: string;
}

const FALLBACK: Release = { version: null, url: `${REPO}/releases/latest` };

let cached: Promise<Release> | undefined;

/**
 * The latest release of the app, read once per build from the GitHub API.
 *
 * The disk image is named after its version (`NiceMailer-0.1.0.dmg`, see
 * `scripts/make-release.sh` in the app repository), so no fixed URL points
 * at it: the build looks it up. The site is rebuilt after each release (the
 * workflow runs on `release` events and every day). The request is made by
 * the build machine, never by visitors' browsers. If it fails (no network,
 * private repository, rate limit), the button points at the page of the
 * latest release, which always works.
 */
export function latestRelease(): Promise<Release> {
  // TypeScript note: `??=` assigns only when `cached` is still undefined, so
  // every page of one build shares the same request.
  cached ??= (async () => {
    try {
      const api = REPO.replace('https://github.com/', 'https://api.github.com/repos/');
      const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
      if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
      const res = await fetch(`${api}/releases/latest`, { headers, signal: AbortSignal.timeout(5000) });
      if (!res.ok) return FALLBACK;
      const data = (await res.json()) as {
        tag_name?: string;
        assets?: { name: string; browser_download_url: string }[];
      };
      const dmg = data.assets?.find((a) => a.name.endsWith('.dmg'));
      return {
        version: data.tag_name?.replace(/^v/, '') ?? null,
        url: dmg?.browser_download_url ?? FALLBACK.url,
      };
    } catch {
      return FALLBACK;
    }
  })();
  return cached;
}
