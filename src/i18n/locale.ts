import { messages, type Locale } from "./messages";

export type { Locale };

export const LOCALE_KEY = "motorfix-lang";
export const THEME_KEY = "motorfix-theme";
export const LOCALE_EVENT = "motorfix:locale";

export function isLocale(value: string | null): value is Locale {
  return value === "fr" || value === "en" || value === "ar";
}

export function getLocale(): Locale {
  if (typeof localStorage === "undefined") return "fr";
  try {
    const stored = localStorage.getItem(LOCALE_KEY);
    return isLocale(stored) ? stored : "fr";
  } catch {
    return "fr";
  }
}

export function t(locale: Locale, key: string, vars?: Record<string, string>): string {
  const parts = key.split(".");
  let node: unknown = messages[locale];

  for (const part of parts) {
    if (typeof node === "object" && node !== null && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }

  if (typeof node !== "string") return key;
  if (!vars) return node;

  return Object.entries(vars).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    node,
  );
}

export function applyLocale(locale: Locale) {
  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === "ar" ? "rtl" : "ltr";

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    element.textContent = t(locale, key);
  });

  document.title = t(locale, "meta.title");
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t(locale, "meta.description"));
}

export function setLocale(locale: Locale) {
  localStorage.setItem(LOCALE_KEY, locale);
  applyLocale(locale);
  window.dispatchEvent(new CustomEvent(LOCALE_EVENT));
}
