"use client";

import { getCalendlyUrl } from "@/lib/booking";
import type { PricingPlan } from "@/types";

type PricingCTAProps = {
  plan: PricingPlan;
  label: string;
  variant?: "primary" | "ghost";
};

const variantStyles = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/25",
  ghost:
    "bg-brand-muted text-brand-gray-light border border-brand-border hover:bg-brand-border",
} as const;

export function PricingCTA({ plan, label, variant = "primary" }: PricingCTAProps) {
  const calendlyUrl = getCalendlyUrl(`pricing-${plan}`);

  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex w-full items-center justify-center rounded-lg px-8 py-4 text-lg font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${variantStyles[variant]}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}
