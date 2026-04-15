import { ui, defaultLang, type Lang, languages } from './ui';

export { type Lang, languages, defaultLang };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string, vars?: Record<string, string>): string {
    let str = ui[lang]?.[key] ?? ui[defaultLang]?.[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{${k}}`, v);
      }
    }
    return str;
  };
}

export function getLocalePath(path: string, lang: Lang): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getAlternateUrls(
  pagePath: string,
  langs: readonly Lang[] = ['en', 'hu', 'it', 'de']
): Record<Lang, string> {
  return Object.fromEntries(
    langs.map((l) => [l, getLocalePath(pagePath, l)])
  ) as Record<Lang, string>;
}
