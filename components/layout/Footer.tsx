import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/booking";

const LEGAL_LINKS = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Servicio", href: "#" },
  { label: "Soporte", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-charcoal py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-brand-pink">EmFit BCN</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gray-light transition-colors hover:text-brand-pink"
              >
                {SITE.instagramHandle}
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-gray-light transition-colors hover:text-brand-pink"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Enlaces legales">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-brand-gray transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-brand-border pt-8 text-center text-xs leading-relaxed text-brand-gray">
          El equipo de EmFit ha tomado todas las medidas posibles para verificar los testimonios
          y transformaciones mostradas en este sitio. Los resultados varían según la disciplina,
          genética y compromiso individual. © {new Date().getFullYear()} EmFit BCN.
        </p>
      </Container>
    </footer>
  );
}
