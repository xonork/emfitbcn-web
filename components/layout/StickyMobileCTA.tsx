"use client";

import { BookingCTA } from "@/components/ui/BookingCTA";
import { HERO } from "@/lib/constants";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-border bg-brand-black/95 p-3 backdrop-blur-md md:hidden">
      <BookingCTA
        primaryLabel={HERO.stickyCta}
        showSecondary={false}
        size="lg"
        fullWidth
        source="sticky-mobile"
      />
    </div>
  );
}
