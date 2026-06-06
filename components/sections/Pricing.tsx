import { PricingCTA } from "@/components/forms/PricingCTA";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRICING } from "@/lib/constants";

export function Pricing() {
  const { single, bundle } = PRICING.plans;

  return (
    <Section id="precios">
      <SectionHeading title={PRICING.headline} align="center" />

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:items-center md:gap-8">
        {/* Ancla — Sesión Suelta */}
        <div className="rounded-2xl border border-brand-border bg-brand-muted p-6 md:p-8">
          <h3 className="text-lg font-semibold text-brand-gray-light">{single.name}</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-brand-gray-light">
              {single.price}
            </span>
            <span className="text-brand-gray">{single.period}</span>
          </div>
          <p className="mt-2 text-sm text-brand-gray">{single.note}</p>
          <div className="mt-8">
            <PricingCTA plan="single" label={single.cta} variant="ghost" />
          </div>
        </div>

        {/* Destacado — Bono 10 Sesiones */}
        <div className="relative rounded-2xl border-2 border-brand-pink bg-brand-muted p-6 shadow-xl shadow-brand-pink/20 md:scale-105 md:p-8">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-pink px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {bundle.badge}
          </span>
          <h3 className="text-lg font-semibold text-white">{bundle.name}</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="font-display text-4xl font-bold text-white">
              {bundle.price}
            </span>
            <span className="text-brand-gray-light">{bundle.period}</span>
          </div>
          <p className="mt-2 text-sm font-bold text-brand-pink">
            {bundle.perSession} / sesión — {bundle.note}
          </p>
          <div className="mt-8">
            <PricingCTA plan="bundle" label={bundle.cta} variant="primary" />
          </div>
        </div>
      </div>
    </Section>
  );
}
