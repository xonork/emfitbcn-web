import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BELIEF_BREAKING } from "@/lib/constants";

export function BeliefBreaking() {
  return (
    <Section>
      <SectionHeading title={BELIEF_BREAKING.headline} align="center" />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {BELIEF_BREAKING.columns.map((col) => (
          <div
            key={col.title}
            className="rounded-2xl border border-brand-border bg-brand-muted p-6 md:p-8"
          >
            <span className="inline-block rounded-full bg-brand-pink/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-pink">
              {col.title}
            </span>
            <p className="mt-4 font-display text-lg font-bold text-white line-through decoration-brand-pink/60">
              {col.error}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-gray-light">
              {col.refutation}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
