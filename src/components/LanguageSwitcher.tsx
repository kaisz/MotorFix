import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { getLocale, LOCALE_EVENT, setLocale, t, type Locale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

const options: { id: Locale; label: string }[] = [
  { id: "fr", label: "FR" },
  { id: "en", label: "EN" },
  { id: "ar", label: "عر" },
];

export default function LanguageSwitcher() {
  const [locale, setCurrent] = useState<Locale>("fr");

  useEffect(() => {
    const sync = () => setCurrent(getLocale());
    sync();
    window.addEventListener(LOCALE_EVENT, sync);
    return () => window.removeEventListener(LOCALE_EVENT, sync);
  }, []);

  return (
    <div
      role="group"
      aria-label={t(locale, "languageLabel")}
      dir="ltr"
      className="flex items-center gap-1"
    >
      {options.map((option) => {
        const active = locale === option.id;
        return (
          <Button
            key={option.id}
            type="button"
            size="sm"
            variant="outline"
            aria-pressed={active}
            className={cn(
              "h-8 rounded-full px-2.5 text-xs",
              active &&
                "border-accent bg-accent text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground",
            )}
            onClick={() => setLocale(option.id)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
