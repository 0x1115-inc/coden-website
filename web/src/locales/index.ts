import { en } from './en';

export type { LocaleContent } from './en';

export const defaultLocale = en;
export const availableLocales = {
  en,
} as const;
