import { ArrowDown, CalendarCheck, Clock, MessageCircle, Repeat2, Zap } from "lucide-react";
import { hero, proof, waLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { PhoneMockup } from "./PhoneMockup";

const proofIcons = [Zap, Clock, CalendarCheck, Repeat2];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44">
      {/* aurora de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
        <div className="absolute right-[-220px] top-40 h-[420px] w-[420px] rounded-full bg-accent-2/[0.08] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.9fr] lg:gap-6">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-1.5 text-xs font-medium text-accent md:text-sm">
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {hero.badge}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                {hero.h1Start}{" "}
                <span className="bg-gradient-to-r from-accent via-emerald-400 to-accent-2 bg-clip-text text-transparent">
                  {hero.h1Highlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                {hero.sub}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <Button href={waLink()} size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="size-5" />
                  {hero.ctaPrimary}
                </Button>
                <Button href="#como-funciona" variant="ghost" size="lg" className="w-full sm:w-auto">
                  {hero.ctaSecondary}
                  <ArrowDown className="size-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </Reveal>
        </div>

        {/* barra de prova */}
        <Reveal delay={0.1} className="mt-20 md:mt-24">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-6 md:grid-cols-4 md:px-8">
            {proof.map((item, i) => {
              const Icon = proofIcons[i];
              return (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <Icon className="size-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
