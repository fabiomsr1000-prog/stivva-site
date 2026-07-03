import { CalendarCheck2, MessagesSquare, Zap } from "lucide-react";
import { howItWorks } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const icons = [MessagesSquare, Zap, CalendarCheck2];

/** Altura do número + margem + metade do ícone (size-14) — centro da linha conectora */
const CONNECTOR_TOP = "calc(3.75rem + 1rem + 1.75rem)";

export function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} sub={howItWorks.sub} />
      <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
        <div
          aria-hidden
          className="absolute left-[16.6%] right-[16.6%] hidden h-px bg-gradient-to-r from-accent/40 via-white/15 to-accent-2/40 md:block"
          style={{ top: CONNECTOR_TOP }}
        />
        {howItWorks.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={step.number} delay={i * 0.12} className="relative">
              <span
                aria-hidden
                className="block font-display text-5xl font-bold tabular-nums leading-none text-white/[0.1] md:text-6xl"
              >
                {step.number}
              </span>
              <div className="relative z-10 mt-4 inline-flex size-14 items-center justify-center rounded-2xl border border-accent/25 bg-[#0e1520] text-accent shadow-[0_0_30px_-6px_rgba(34,197,94,0.35)]">
                <Icon className="size-6" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2.5 leading-relaxed text-white/60">{step.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
