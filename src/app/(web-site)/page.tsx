import AboutUsSection from "@/components/web-site/home-page/about-us-section";
import ContactUsSection from "@/components/web-site/home-page/contact-us";
import Faqs from "@/components/web-site/home-page/faqs";
import HeroSection from "@/components/web-site/home-page/hero-section";
import HowToUse from "@/components/web-site/home-page/how-to-use";
import MarketOverview from "@/components/web-site/home-page/market-overview";
import OurServicesSection from "@/components/web-site/home-page/our-services-section";
import Partners from "@/components/web-site/home-page/partners-logo";
import Statistics from "@/components/web-site/home-page/statistics";
import WhyChooseUs from "@/components/web-site/home-page/why-choose-us";

export default function Home() {
  return (
    <main className="w-full h-full grid">
      <HeroSection />
      <Statistics />
      <AboutUsSection />
      <OurServicesSection />
      <HowToUse />
      <Partners />
      <MarketOverview />
      <WhyChooseUs />
      <Faqs />
      <ContactUsSection />
    </main>
  );
}
