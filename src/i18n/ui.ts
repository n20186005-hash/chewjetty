export const LANGUAGES = [
  { code: 'ms', label: 'Bahasa Melayu', htmlLang: 'ms', dir: 'ltr' },
  { code: 'en', label: 'English', htmlLang: 'en', dir: 'ltr' },
  { code: 'zh', label: '中文', htmlLang: 'zh-CN', dir: 'ltr' },
] as const;

export type Lang = (typeof LANGUAGES)[number]['code'];

export const defaultLang: Lang = 'ms';

export function isLang(value: string): value is Lang {
  return LANGUAGES.some((l) => l.code === value);
}

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/').filter(Boolean)[0];
  return isLang(first) ? first : defaultLang;
}

/** URL relatif bagi sesuatu halaman dalam bahasa tertentu (ms = tanpa awalan). */
export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  if (clean === '/') return `/${lang}/`;
  return `/${lang}${clean}`;
}

/** Alternates hreflang bagi sesuatu pathname (cth. /en/galeri -> semua bahasa). */
export function buildAlternates(pathname: string): { code: string; url: string }[] {
  const clean = pathname.replace(/\.html$/, '');
  const segments = clean.split('/').filter(Boolean);
  let basePath = clean;
  if (segments.length > 0 && isLang(segments[0])) {
    basePath = `/${segments.slice(1).join('/')}`;
  }
  if (basePath === '') basePath = '/';
  return LANGUAGES.map((l) => ({ code: l.code, url: getLocalizedPath(l.code, basePath) }));
}

/** Label bahasa untuk ditunjukkan dalam pemilih bahasa. */
export const langLabel: Record<Lang, string> = {
  ms: 'Bahasa Melayu',
  en: 'English',
  zh: '中文',
};

/** Label pendek untuk butang bahasa. */
export const langShort: Record<Lang, string> = {
  ms: 'BM',
  en: 'EN',
  zh: '中',
};

/** Label kebolehaksesan (aria-label) pemilih bahasa mengikut bahasa semasa. */
export const langSwitcherAria: Record<Lang, string> = {
  ms: 'Pilih bahasa',
  en: 'Select language',
  zh: '选择语言',
};
