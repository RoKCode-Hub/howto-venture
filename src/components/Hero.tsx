import heroImage from "@/assets/hero-mountain.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <img
          src={heroImage}
          alt="Mountain landscape with climbers and coral accent"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
