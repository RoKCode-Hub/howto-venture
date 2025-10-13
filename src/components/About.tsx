import profileImage from "@/assets/profile.jpg";
import aboutGraphic from "@/assets/about-graphic.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image with coral accent */}
          <div className="relative flex items-center justify-center">
            <img
              src={profileImage}
              alt="Professional profile"
              className="relative z-10 rounded-none shadow-2xl w-full max-w-md"
            />
            <img
              src={aboutGraphic}
              alt=""
              className="absolute bottom-0 right-0 w-48 h-auto opacity-80 translate-x-8 translate-y-8"
            />
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                We help entrepreneurs and visionaries realize their greatest entrepreneurial aspirations.
              </p>
              <p>
                We do this by working with them to optimise their start up operating system.
              </p>
              <p>
                Success-proven, scalable, and people-centered.
              </p>
              <p className="font-semibold pt-4">
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
