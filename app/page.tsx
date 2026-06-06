import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { AppFeatures } from "@/components/sections/AppFeatures";
import { BeliefBreaking } from "@/components/sections/BeliefBreaking";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Transformations } from "@/components/sections/Transformations";
import { TrustBar } from "@/components/sections/TrustBar";
import { VideoTestimonials } from "@/components/sections/VideoTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBar />
        <CtaBlock />
        <BeliefBreaking />
        <AppFeatures />
        <Transformations />
        <VideoTestimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
