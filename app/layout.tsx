import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import { QuizProvider } from "@/components/providers/QuizProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emfitbcn.com"),
  title: "EmFit BCN | Entrenamiento Presencial de Alta Intensidad",
  description:
    "Sesiones 1-to-1 de entrenamiento de alta intensidad en Sant Adrià de Besòs y Barcelona. Corrección técnica, motivación extrema y resultados reales. @em_fitbcn",
  openGraph: {
    title: "EmFit BCN | Entrenamiento Presencial de Alta Intensidad",
    description:
      "Transforma tu físico con sesiones presenciales bajo supervisión directa en Sant Adrià de Besòs y Barcelona.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${robotoCondensed.variable} bg-brand-black text-brand-white antialiased`}
      >
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
