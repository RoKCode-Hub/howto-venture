import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative mt-[72px] overflow-hidden">
      <div className="relative h-[540px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mountain landscape with climbers"
            className="w-full h-full object-cover"
          />
          {/* Grayscale overlay to match original */}
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1))' 
          }} />
        </div>

        {/* Coral Accent Shape - exact angle matching original */}
        <div 
          className="absolute right-0 top-0 h-full w-[45%] bg-accent hidden lg:block" 
          style={{ 
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-[2.5rem] md:text-[3rem] leading-tight font-bold text-navy-dark mb-8">
              Passionately driven to <br />
              help founders and visionaries <br />
              <span className="text-accent">achieve their wildest dreams</span>
            </h1>
            <button
              onClick={scrollToAbout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-3.5 text-sm tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all uppercase"
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
