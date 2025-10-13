import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[540px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mountain landscape with climbers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Coral Accent Shape - matching original exact angle */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[40%] bg-accent origin-top-left hidden lg:block" 
        style={{ 
          transform: 'skewX(-15deg) translateX(25%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Passionately driven to help founders and visionaries{" "}
            <span className="text-accent">achieve their wildest dreams</span>
          </h1>
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
