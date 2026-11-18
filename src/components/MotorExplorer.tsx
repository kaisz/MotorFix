import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getLocale, LOCALE_EVENT, t, type Locale } from "@/i18n/locale";
import { messages } from "@/i18n/messages";

const motorIds = ["menager", "scooter", "trottinette", "vehicule"] as const;

type MotorId = (typeof motorIds)[number];

function MotorCard({
  id,
  locale,
  labelled = false,
}: {
  id: MotorId;
  locale: Locale;
  labelled?: boolean;
}) {
  const motor = messages[locale].motors.items[id];

  return (
    <Card
      id={labelled ? id : undefined}
      className="scroll-mt-36 gap-0 overflow-hidden rounded-[1.6rem] border-aluminum py-0 shadow-[0_16px_40px_-28px_rgba(11,31,51,0.28)]"
    >
      <div className="h-0.5 bg-copper" aria-hidden="true" />
      <CardHeader className="px-6 pt-6">
        <Badge variant="outline" className="border-aluminum tracking-[0.14em] uppercase">
          {motor.kicker}
        </Badge>
        <CardTitle className="font-display text-2xl font-semibold">
          <h3>{motor.label}</h3>
        </CardTitle>
        <div className="h-px bg-aluminum" aria-hidden="true" />
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-sm leading-6 text-muted-foreground">{motor.text}</p>
        <ul className="mt-4 grid gap-2 text-sm">
          {motor.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default function MotorExplorer() {
  const [active, setActive] = useState("all");
  const [locale, setCurrent] = useState<Locale>("fr");

  useEffect(() => {
    const sync = () => setCurrent(getLocale());
    sync();
    window.addEventListener(LOCALE_EVENT, sync);
    return () => window.removeEventListener(LOCALE_EVENT, sync);
  }, []);

  const copy = messages[locale].motors;
  const activeMotor = motorIds.find((id) => id === active);
  const status =
    active === "all" || !activeMotor
      ? copy.statusAll
      : t(locale, "motors.statusOne", { label: copy.items[activeMotor].label });

  return (
    <section id="moteurs" className="scroll-mt-36">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase dark:text-primary-foreground">
            {copy.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{copy.intro}</p>
        </div>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {status}
        </p>
      </div>

      <Tabs value={active} onValueChange={setActive} className="mt-6 gap-6">
        <TabsList
          aria-label={copy.filterLabel}
          className="h-auto w-full justify-start gap-2 overflow-x-auto bg-transparent p-0"
        >
          <TabsTrigger value="all">{copy.all}</TabsTrigger>
          {motorIds.map((id) => (
            <TabsTrigger key={id} value={id}>
              {copy.items[id].label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid gap-4 md:grid-cols-2">
            {motorIds.map((id) => (
              <MotorCard key={id} id={id} locale={locale} labelled />
            ))}
          </div>
        </TabsContent>
        {motorIds.map((id) => (
          <TabsContent key={id} value={id}>
            <div className="grid gap-4 md:grid-cols-2">
              <MotorCard id={id} locale={locale} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
