import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import ApproachSection from "@/components/ApproachSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FocusAreas />
      <ApproachSection />
      <TestimonialSlider />
      <Contact />
    </div>
  );
};

export default Index;
