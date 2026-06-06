import { Play } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VIDEO_TESTIMONIALS, VIDEO_TESTIMONIALS_SECTION } from "@/lib/constants";

export function VideoTestimonials() {
  return (
    <Section className="bg-brand-surface">
      <SectionHeading
        title={VIDEO_TESTIMONIALS_SECTION.title}
        subtitle={VIDEO_TESTIMONIALS_SECTION.subtitle}
      />

      <div className="grid gap-6 md:grid-cols-3">
        {VIDEO_TESTIMONIALS.map((video) => (
          <div
            key={video.title}
            className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-muted"
          >
            {/* TODO: embed real — reemplazar con iframe o video poster */}
            <div className="relative aspect-video bg-brand-charcoal">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-pink/20 transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 fill-brand-pink text-brand-pink" />
                </div>
              </div>
              <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <p className="font-semibold text-white">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
