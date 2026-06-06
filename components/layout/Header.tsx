"use client";

import Image from "next/image";
import Link from "next/link";
import { BookingCTA } from "@/components/ui/BookingCTA";
import { Container } from "@/components/ui/Container";
import { HERO, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-brand-border/50 bg-brand-black/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2" aria-label="EmFit inicio">
            <Image
              src="/logo.jpeg"
              alt="EmFit logo"
              width={48}
              height={48}
              className="h-10 w-10 rounded-full object-cover md:h-12 md:w-12"
              priority
            />
            <span className="hidden font-display text-lg font-bold uppercase tracking-wider text-brand-pink sm:inline">
              EmFit
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-gray-light transition-colors hover:text-brand-pink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <BookingCTA
              primaryLabel={HERO.headerCta}
              showSecondary={false}
              size="sm"
              source="header"
            />
          </div>

          <div className="md:hidden">
            <BookingCTA
              primaryLabel={HERO.headerCta}
              showSecondary={false}
              size="sm"
              source="header-mobile"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
