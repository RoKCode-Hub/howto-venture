import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative min-h-screen flex items-center">
        {/* Grayscale Mountain Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mountain landscape with climbers"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Diagonal Coral Accent - positioned on the right */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[45%] bg-accent z-10"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl leading-tight font-bold text-primary mb-10">{/* Larger text */}
              Passionately driven to<br />
              help founders and visionaries<br />
              <span className="text-accent">achieve their wildest dreams</span>
            </h1>
            <button
              onClick={scrollToAbout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 text-sm tracking-wider rounded-full transition-all uppercase"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
