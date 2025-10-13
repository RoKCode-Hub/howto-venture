import profileImage from "@/assets/about-profile.jpg";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Image */}
        <div className="relative min-h-[600px] md:min-h-full bg-black">
          <img
            src={profileImage}
            alt="Professional profile"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Coral diagonal accent */}
          <div 
            className="absolute bottom-0 right-0 w-64 h-64 bg-accent opacity-90"
            style={{
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
            }}
          />
        </div>

        {/* Right Column - Content */}
        <div className="bg-navy-dark text-white py-24 px-12 lg:px-20">
          <div className="max-w-xl">
            <h2 className="text-[43px] font-quicksand font-bold mb-12">About</h2>

            <div className="space-y-8 text-base leading-relaxed font-quicksand">
              <p>
                We help entrepreneurs and visionaries realize their greatest entrepreneurial aspirations.
              </p>

              <p>
                We do this by working with them to optimise their start up operating system.
              </p>

              <p>
                Success-proven, scalable, and people-centered.
              </p>

              <p>
                In this, we serve as sparring partners, consultants and interim chief of staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
