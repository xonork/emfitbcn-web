import { BookingCTA } from "@/components/ui/BookingCTA";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA_BLOCK } from "@/lib/constants";

export function CtaBlock() {
  return (
    <Section className="bg-brand-surface py-16 md:py-20">
      <SectionHeading
        title={CTA_BLOCK.title}
        subtitle={CTA_BLOCK.subtitle}
        align="center"
      />
      <div className="flex justify-center">
        <BookingCTA layout="stack" size="lg" source="cta-block" />
      </div>
    </Section>
  );
}
