import { MessageCircle } from "lucide-react";
import { finalCta, waLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[240px] w-[240px] rounded-full bg-accent-2/10 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.2rem)] font-bold leading-tight tracking-tight text-white">
            {finalCta.title}
          </h2>
          <p className="mt-5 text-white/60 md:text-lg">{finalCta.sub}</p>
          <div className="mt-10">
            <Button href={waLink()} size="xl">
              <MessageCircle className="size-6" />
              {finalCta.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
