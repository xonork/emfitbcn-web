import { BOOKING } from "@/lib/constants";

export function getCalendlyUrl(source?: string): string {
  const base =
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? BOOKING.calendlyUrl;
  if (!source) return base;
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}utm_source=${encodeURIComponent(source)}`;
}

export function getWhatsAppUrl(): string {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? BOOKING.whatsappNumber;
  const message = encodeURIComponent(BOOKING.whatsappMessage);
  return `https://wa.me/${number.replace(/\D/g, "")}?text=${message}`;
}
