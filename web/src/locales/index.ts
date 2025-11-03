import { vi } from './vi';

export type { LocaleContent } from './vi';

export const defaultLocale = vi;
export const availableLocales = {
  vi,
} as const;
