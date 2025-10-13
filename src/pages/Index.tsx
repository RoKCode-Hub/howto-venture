import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import ApproachSection from "@/components/ApproachSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FocusAreas />
      <ApproachSection />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
