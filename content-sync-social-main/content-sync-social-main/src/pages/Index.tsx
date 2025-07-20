import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedContent } from "@/components/FeaturedContent";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedContent />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
