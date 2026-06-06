import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TRANSFORMATIONS, TRANSFORMATIONS_SECTION } from "@/lib/constants";

export function Transformations() {
  return (
    <Section id="transformaciones">
      <SectionHeading
        title={TRANSFORMATIONS_SECTION.title}
        subtitle={TRANSFORMATIONS_SECTION.subtitle}
      />

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
        {TRANSFORMATIONS.map((item) => (
          <div
            key={item.name}
            className="w-72 flex-shrink-0 snap-center rounded-2xl border border-brand-border bg-brand-muted overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-0.5 bg-brand-border">
              <div className="flex aspect-[3/4] items-center justify-center bg-brand-charcoal text-xs text-brand-gray">
                ANTES
              </div>
              <div className="flex aspect-[3/4] items-center justify-center bg-brand-pink/10 text-xs text-brand-pink">
                DESPUÉS
              </div>
            </div>
            <div className="p-4">
              <p className="font-bold text-white">{item.name}</p>
              <p className="text-sm text-brand-gray-light">{item.goal}</p>
              <p className="mt-1 text-xs text-brand-pink">{item.weeks} semanas</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
