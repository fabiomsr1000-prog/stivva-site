import { Check, Headset, ShieldCheck, Zap } from "lucide-react";
import { pricing, waLink } from "@/lib/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const reassuranceIcons = [ShieldCheck, Zap, Headset];

export function Pricing() {
  return (
    <Section id="planos">
      <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} sub={pricing.sub} />
      <div className="grid gap-6 lg:grid-cols-3">
        {pricing.plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? "gborder-strong shadow-[0_20px_80px_-30px_rgba(34,197,94,0.35)]"
                  : "gborder"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-xs font-bold text-[#05130a]">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-white/50">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-[2.6rem] font-bold leading-none tracking-tight text-white">
                  {plan.monthly}
                </span>
                <span className="text-white/50">/mês</span>
              </div>
              <p className="mt-2 text-sm text-white/45">{plan.installLabel}</p>
              <ul className="mt-7 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-white/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  href={waLink(plan.waMessage)}
                  variant={plan.highlight ? "primary" : "ghost"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55">
          {pricing.reassurance.map((item, i) => {
            const Icon = reassuranceIcons[i];
            return (
              <li key={item} className="flex items-center gap-2">
                <Icon className="size-4 text-accent" aria-hidden />
                {item}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
