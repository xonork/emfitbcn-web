"use client";

import { HERO } from "@/lib/constants";
import { getCalendlyUrl, getWhatsAppUrl } from "@/lib/booking";

type BookingCTAProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  showSecondary?: boolean;
  source?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  layout?: "inline" | "stack";
  fullWidth?: boolean;
};

const variantStyles = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink-hover shadow-lg shadow-brand-pink/25",
  secondary:
    "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/10",
  ghost:
    "bg-brand-muted text-brand-gray-light border border-brand-border hover:bg-brand-border",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg font-bold",
} as const;

function buttonClasses(
  variant: BookingCTAProps["variant"],
  size: BookingCTAProps["size"],
  className: string
) {
  return `inline-flex items-center justify-center rounded-lg font-bold uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${variantStyles[variant ?? "primary"]} ${sizeStyles[size ?? "md"]} ${className}`;
}

export function BookingCTA({
  primaryLabel = HERO.cta,
  secondaryLabel = HERO.secondaryCta,
  showSecondary = true,
  source,
  variant = "primary",
  size = "md",
  className = "",
  layout = "inline",
  fullWidth = false,
}: BookingCTAProps) {
  const calendlyUrl = getCalendlyUrl(source);
  const whatsappUrl = getWhatsAppUrl();

  const containerClass =
    layout === "stack"
      ? `flex flex-col gap-3 ${fullWidth ? "w-full" : "items-stretch sm:items-start"}`
      : `flex flex-col gap-4 sm:flex-row sm:items-center ${fullWidth ? "w-full" : ""}`;

  return (
    <div className={containerClass}>
      <a
        href={calendlyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses(variant, size, `${fullWidth ? "w-full" : ""} ${className}`.trim())}
        aria-label={primaryLabel}
      >
        {primaryLabel}
      </a>
      {showSecondary && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-brand-pink underline-offset-4 transition-colors hover:text-brand-pink-hover hover:underline"
          aria-label={secondaryLabel}
        >
          {secondaryLabel}
        </a>
      )}
    </div>
  );
}
