import AboutUsSection from "@/components/web-site/home-page/about-us-section";
import HeroSection from "@/components/web-site/home-page/hero-section";
import MarketOverview from "@/components/web-site/home-page/market-overview";
import OurServicesSection from "@/components/web-site/home-page/our-services-section";

export default function Home() {
  return (
    <main className="w-full h-full grid">
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <MarketOverview />
    </main>
  );
}
