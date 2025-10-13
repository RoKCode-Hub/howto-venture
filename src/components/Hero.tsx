import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative mt-[72px] overflow-hidden bg-white">
      <div className="relative min-h-[720px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-[65%]">
          <img
            src={heroImage}
            alt="Mountain landscape with climbers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coral Accent Shape - exact from Wix */}
        <div 
          className="absolute right-0 top-0 h-full w-[35%] bg-accent z-10" 
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-xl">
            <h1 className="text-[43px] leading-tight font-quicksand font-bold text-navy-dark mb-10">
              Passionately driven to<br />
              help founders and visionaries<br />
              <span className="text-accent">achieve their wildest dreams</span>
            </h1>
            <button
              onClick={scrollToAbout}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-4 text-sm tracking-wider rounded-full transition-all uppercase inline-flex items-center gap-2"
            >
              LEARN MORE
              <svg width="20" height="20" viewBox="0 0 60 60" fill="currentColor">
                <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
