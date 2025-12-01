import { CaseStudySection } from "./modules/CaseStudySection";
import { ClientResultsSection } from "./modules/ClientResultSection";
import { CTASection } from "./modules/CTASection";
import { FAQSection } from "./modules/FAQSection";
import { Footer } from "./modules/Footer";
import { Hero } from "./modules/Hero";
import { Navbar } from "./modules/Navbar";
import { PortfolioSection } from "./modules/PortfolioSection";
import { ProcessSection } from "./modules/ProcessSection";
import { ServicesSection } from "./modules/ServicesSection";
import { StatsSection } from "./modules/StatsSection/components";
import { TestimonialsSection } from "./modules/TestimonialsSection";
import { TestimonialCarousel } from "./modules/TestimonialsSection/components/TestimonialCarousel";

export default function App() {
  return (
    <>
      <div className="text-white/60 text-sm not-italic normal-nums font-normal accent-auto bg-neutral-950 box-border caret-transparent block tracking-[normal] leading-[22.4px] list-outside list-disc min-h-full pointer-events-auto text-start indent-0 normal-case visible border-separate font-poppins">
        <Navbar />
        <Hero />
        <div className="items-center bg-white/10 box-border caret-transparent flex h-px justify-center w-full mb-10 md:mb-[60px]"></div>
        <StatsSection />
        <TestimonialsSection />
        <TestimonialCarousel />
        <PortfolioSection />
        <CaseStudySection />
        <ProcessSection />
        <ServicesSection />
        <ClientResultsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
