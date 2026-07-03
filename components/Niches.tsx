import { niches } from "@/lib/content";
import { Badge } from "./ui/Badge";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

export function Niches() {
  return (
    <Section id="para-quem" className="!py-16 md:!py-24">
      <SectionHeading eyebrow={niches.eyebrow} title={niches.title} />
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3">
          {niches.items.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <p className="mt-9 text-center text-lg text-white/60">{niches.line}</p>
      </Reveal>
    </Section>
  );
}
