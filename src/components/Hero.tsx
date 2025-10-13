import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
        <img
          src={heroImage}
          alt="Mountain landscape with climbers and coral accent"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="block text-primary">Passionately driven to</span>
              <span className="block text-primary">help founders and visionaries</span>
              <span className="block text-accent">achieve their wildest dreams</span>
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
