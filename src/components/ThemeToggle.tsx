import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { getLocale, LOCALE_EVENT, t } from "@/i18n/locale";
import { THEME_KEY } from "@/i18n/locale";

export default function ThemeToggle() {
  const [label, setLabel] = useState("Changer le thème");

  useEffect(() => {
    const sync = () => setLabel(t(getLocale(), "themeToggle"));
    sync();
    window.addEventListener(LOCALE_EVENT, sync);
    return () => window.removeEventListener(LOCALE_EVENT, sync);
  }, []);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="relative shrink-0 rounded-full"
      aria-label={label}
      onClick={() => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
      }}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
      >
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 m-auto size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      >
        <path
          d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
}
