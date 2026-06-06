import { Flame, SlidersHorizontal, Target } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUE_PROPS, VALUE_PROPS_SECTION } from "@/lib/constants";

const ICON_MAP = {
  target: Target,
  flame: Flame,
  sliders: SlidersHorizontal,
} as const;

export function AppFeatures() {
  return (
    <Section id="metodologia" className="bg-brand-surface">
      <SectionHeading
        title={VALUE_PROPS_SECTION.title}
        subtitle={VALUE_PROPS_SECTION.subtitle}
      />

      <div className="grid gap-8 md:grid-cols-3">
        {VALUE_PROPS.map((feature) => {
          const Icon = ICON_MAP[feature.icon];
          return (
            <div
              key={feature.title}
              className="overflow-hidden rounded-2xl border border-brand-border bg-brand-muted"
            >
              <div className="flex h-48 items-center justify-center border-b border-brand-border bg-brand-black/50">
                <div className="flex h-32 w-48 items-center justify-center rounded-xl border-2 border-dashed border-brand-pink/30 bg-brand-charcoal">
                  <Icon className="h-12 w-12 text-brand-pink/50" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray-light">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
