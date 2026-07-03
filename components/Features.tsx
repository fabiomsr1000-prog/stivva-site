import {
  AudioLines,
  CalendarCheck,
  LayoutDashboard,
  MoonStar,
  RefreshCw,
  UserRound,
} from "lucide-react";
import { features } from "@/lib/content";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const icons = [AudioLines, CalendarCheck, RefreshCw, MoonStar, UserRound, LayoutDashboard];

export function Features() {
  return (
    <Section id="recursos">
      <SectionHeading eyebrow={features.eyebrow} title={features.title} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <Card hover className="group h-full p-7">
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.text}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
