import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-foreground">
          What founders and leaders say about our collaboration
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent opacity-50" />
            
            <blockquote className="relative z-10 text-primary-foreground">
              <p className="text-lg md:text-xl leading-relaxed mb-8 pl-8">
                "Robin is an exceptional coach who excels at guiding thoughtful analysis and
                optimizing processes. His insightful questions and critical thinking have
                significantly enhanced our decision-making. As an outstanding sparring partner, he
                genuinely strives to understand our challenges while providing constructive critique.
                His support and expertise have been pivotal to my personal growth and the
                achievements of our business."
              </p>
              
              <footer className="pl-8">
                <div className="font-bold text-accent text-lg">
                  Larissa, Co-CEO & Co-Founder Empion
                </div>
                <a
                  href="https://www.empion.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  www.empion.io
                </a>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
