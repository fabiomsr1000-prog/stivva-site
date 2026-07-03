import { MessageCircle, Play } from "lucide-react";
import { demo, waLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Demo() {
  return (
    <Section id="demonstracao" className="border-y border-white/[0.05] bg-[#0d141f]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-5 bg-accent/60" aria-hidden />
            {demo.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {demo.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
            {demo.text}
          </p>
          <div className="mt-8">
            <Button href={waLink(demo.ctaMessage)} size="lg">
              <MessageCircle className="size-5" />
              {demo.cta}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="gborder relative aspect-video overflow-hidden rounded-2xl">
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-[#101a29] via-[#0c1420] to-[#0e1a17]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]"
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-accent text-[#05130a] shadow-[0_0_60px_-10px_rgba(34,197,94,0.6)] md:size-20">
                <Play className="ml-1 size-7 fill-current" aria-hidden />
              </div>
              <p className="text-sm font-medium text-white/50">{demo.videoLabel}</p>
              <p className="text-xs text-white/30">{demo.videoHint}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
