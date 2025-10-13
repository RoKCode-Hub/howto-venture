import profileImage from "@/assets/profile.jpg";
import aboutGraphic from "@/assets/about-graphic.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image with graphic overlay */}
          <div className="relative">
            <div className="relative w-full">
              <img
                src={profileImage}
                alt="Professional profile"
                className="w-full h-auto object-cover"
              />
              <img
                src={aboutGraphic}
                alt=""
                className="absolute -bottom-12 -right-12 w-64 h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-[43px] font-quicksand font-bold mb-8">About</h2>
            <div className="space-y-6 text-base leading-relaxed font-quicksand">
              <p>
                We help entrepreneurs and visionaries realize their greatest entrepreneurial aspirations.
              </p>
              <p>
                We do this by working with them to optimise their start up operating system.
              </p>
              <p>
                Success-proven, scalable, and people-centered.
              </p>
            </div>
            <p className="mt-8 font-semibold text-base leading-relaxed font-quicksand">
              In this, we serve as sparring partners, consultants and interim chief of staff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
