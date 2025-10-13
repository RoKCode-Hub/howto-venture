import profileImage from "@/assets/personal-image.jpg";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[700px]">
        {/* Left Column - Image with diagonal accent */}
        <div className="relative bg-black overflow-hidden">
          <img
            src={profileImage}
            alt="Professional portrait"
            className="w-full h-full object-cover"
          />
          {/* Orange diagonal accent overlay */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent origin-top-right transform skew-x-[-15deg] translate-x-1/4"></div>
        </div>

        {/* Right Column - Content */}
        <div className="bg-primary text-primary-foreground flex items-center py-20 px-12 lg:px-24">
          <div className="max-w-xl space-y-12">
            <h1 className="text-5xl lg:text-6xl font-bold">About</h1>

            <div className="space-y-8 text-lg leading-relaxed">
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
