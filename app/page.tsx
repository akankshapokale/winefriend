import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DiscoverSection } from "@/components/sections/DiscoverSection";
import { CollectionSection } from "@/components/sections/CollectionSection";
import { BusinessSection } from "@/components/sections/BusinessSection";
import { ToursSection } from "@/components/sections/ToursSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { JournalSection } from "@/components/sections/JournalSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DiscoverSection />
        <CollectionSection />
        <BusinessSection />
        <ToursSection />
        <AboutSection />
        <JournalSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
