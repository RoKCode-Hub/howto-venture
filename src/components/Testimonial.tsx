import testimonialImage from "@/assets/testimonial-image.png";

const Testimonial = () => {
  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-normal text-center mb-16 text-white">
          What founders and leaders say about our collaboration
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <blockquote className="text-white">
              <p className="text-base md:text-lg leading-relaxed mb-8">
                "Robin is an exceptional coach who excels at guiding thoughtful analysis and
                optimizing processes. His insightful questions and critical thinking have
                significantly enhanced our decision-making. As an outstanding sparring partner, he
                genuinely strives to understand our challenges while providing constructive critique.
                His support and expertise have been pivotal to my personal growth and the
                achievements of our business."
              </p>
              
              <footer>
                <div className="font-bold text-base">
                  Larissa, Co-CEO & Co-Founder Empion
                </div>
                <a
                  href="https://www.empion.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-accent transition-colors text-sm underline"
                >
                  https://www.empion.io/
                </a>
              </footer>
            </blockquote>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src={testimonialImage} 
              alt="" 
              className="w-full h-auto max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
