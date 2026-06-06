"use client";

import { BookingCTA } from "@/components/ui/BookingCTA";
import { Container } from "@/components/ui/Container";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* TODO: Fase 2 - hero video loop responsivo (sesión presencial) */}
      <div className="absolute inset-0 bg-brand-black">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 via-brand-black to-brand-black" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="aspect-video w-full max-w-4xl rounded-2xl border border-brand-border bg-brand-muted">
            <div className="flex h-full items-center justify-center text-brand-gray">
              [ Vídeo de sesión presencial ]
            </div>
          </div>
        </div>
      </div>

      <Container className="relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {HERO.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-gray-light md:text-xl">
            {HERO.h2}
          </p>
          <div className="mt-10">
            <BookingCTA size="lg" source="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}
