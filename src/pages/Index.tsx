import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <ForWhomSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;