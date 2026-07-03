import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function Section({ id, className = "", innerClassName = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${innerClassName}`}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, sub, align = "center" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={`mb-14 max-w-2xl md:mb-16 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-5 bg-accent/60" aria-hidden />
          {eyebrow}
          {center && <span className="h-px w-5 bg-accent/60" aria-hidden />}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-[2.6rem] md:leading-[1.15]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base text-white/60 md:text-lg">{sub}</p>}
    </Reveal>
  );
}
