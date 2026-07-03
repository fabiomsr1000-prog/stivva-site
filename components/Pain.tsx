import { pain } from "@/lib/content";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

export function Pain() {
  return (
    <Section id="dor">
      <SectionHeading eyebrow={pain.eyebrow} title={pain.title} sub={pain.sub} />
      <div className="grid gap-5 md:grid-cols-3">
        {pain.cards.map((card, i) => (
          <Reveal key={card.stat} delay={i * 0.08}>
            <Card className="h-full p-8">
              <p className="bg-gradient-to-b from-white to-white/40 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent md:text-6xl">
                {card.stat}
              </p>
              <p className="mt-4 leading-relaxed text-white/65">{card.text}</p>
              <p className="mt-3 text-[11px] italic text-white/25">{card.note}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
