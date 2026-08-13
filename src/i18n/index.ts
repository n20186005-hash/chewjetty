import ms from './ms.json';
import en from './en.json';
import zh from './zh.json';
import type { Lang } from './ui';

// Struktur jenis untuk kandungan terjemahan. Jenis ditakrifkan secara longgar
// (Record<string, unknown>) supaya struktur JSON mentah boleh digunakan terus.
export type Translation = typeof ms;

export const translations: Record<Lang, Translation> = { ms, en, zh };

export function getTranslation(lang: Lang): Translation {
  return translations[lang] ?? ms;
}
