import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mountain landscape symbolizing achievement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Coral Accent Shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-accent origin-top-left transform skew-x-12 translate-x-1/3 hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Passionately driven to help founders and visionaries{" "}
            <span className="text-accent">achieve their wildest dreams</span>
          </h1>
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
