import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { vi } from "./vi";
import { en } from "./en";
import type { LocaleContent, LocaleId } from "./types";

const STORAGE_KEY = "coden:locale";

export const availableLocales: Record<LocaleId, LocaleContent> = {
  vi,
  en,
};

export const defaultLocaleId: LocaleId = "vi";

interface LocaleContextValue {
  localeId: LocaleId;
  content: LocaleContent;
  setLocale: (id: LocaleId) => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [localeId, setLocaleId] = useState<LocaleId>(() => {
    if (typeof window === "undefined") {
      return defaultLocaleId;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleId | null;
    return stored && stored in availableLocales ? stored : defaultLocaleId;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, localeId);
    }
  }, [localeId]);

  const content = availableLocales[localeId];

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = content.meta.lang;
      document.title = content.meta.title;
    }
  }, [content]);

  const value = useMemo(
    () => ({
      localeId,
      content,
      setLocale: setLocaleId,
    }),
    [localeId, content],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export const localeOptions: { id: LocaleId; shortLabel: string; name: string }[] = Object.values(
  availableLocales,
).map((locale) => ({
  id: locale.meta.id,
  shortLabel: locale.meta.languageShortLabel,
  name: locale.meta.languageName,
}));

export type { LocaleContent, LocaleId } from "./types";
