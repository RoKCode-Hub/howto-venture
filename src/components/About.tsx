import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent opacity-30 rounded-lg" />
            <img
              src={profileImage}
              alt="Professional consultant profile"
              className="relative z-10 rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                We help entrepreneurs and visionaries realize their greatest entrepreneurial
                aspirations. We do this by working with them to optimise their start up operating
                system. Success-proven, scalable, and people-centered.
              </p>
              <p className="font-semibold">
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
