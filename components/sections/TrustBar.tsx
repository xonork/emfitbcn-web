import { TRUST_BAR } from "@/lib/constants";

export function TrustBar() {
  return (
    <div className="border-y border-brand-border bg-brand-charcoal py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-brand-pink">
          {TRUST_BAR.metric}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {TRUST_BAR.logos.map((logo) => (
            <div
              key={logo}
              className="flex h-10 items-center rounded border border-brand-border/50 bg-brand-muted/50 px-4 text-xs font-semibold uppercase tracking-wider text-brand-gray grayscale transition-all hover:grayscale-0 md:text-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
