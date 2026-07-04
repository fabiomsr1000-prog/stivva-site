import { MessageCircle } from "lucide-react";
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
          <div className="gborder relative aspect-video overflow-hidden rounded-2xl bg-black">
            <video
              className="h-full w-full object-contain"
              controls
              playsInline
              preload="metadata"
              poster={demo.videoPoster}
            >
              <source src={demo.videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeo. Use Chrome ou Edge.
            </video>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
