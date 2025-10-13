import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FocusAreas from "@/components/FocusAreas";
import Approach from "@/components/Approach";
import TestimonialSlider from "@/components/TestimonialSlider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FocusAreas />
      <Approach />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
