import AboutUsSection from "@/components/web-site/home-page/about-us-section";
import HeroSection from "@/components/web-site/home-page/hero-section";
import MarketOverview from "@/components/web-site/home-page/market-overview";
import OurServicesSection from "@/components/web-site/home-page/our-services-section";
import Partners from "@/components/web-site/home-page/partners-logo";
import Statistics from "@/components/web-site/home-page/statistics";

export default function Home() {
  return (
    <main className="w-full h-full grid">
      <HeroSection />
      <Statistics />
      <AboutUsSection />
      <OurServicesSection />
      <Partners />
      <MarketOverview />
    </main>
  );
}
