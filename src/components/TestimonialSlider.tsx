import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: '"Robin is an exceptional coach who excels at guiding thoughtful analysis and optimizing processes. His insightful questions and critical thinking have significantly enhanced our decision-making. As an outstanding sparring partner, he genuinely strives to understand our challenges while providing constructive critique. His support and expertise have been pivotal to my personal growth and the achievements of our business."',
    author: "Larissa, Co-CEO & Co-Founder Empion",
    website: "https://www.empion.io/",
  },
  {
    quote: '"Robin is a true coach, which asks the right questions at the right time and an outstanding sparring-partner. Without him, our business wouldn\'t be where it is right now. If you are struggling to build the right structure and mindset for a fast-growing company and you have the chance to work with Robin, do it. He helped us not just to build a scalable structure, but also hire A-players every company needs to grow fast"',
    author: "Valentin, CEO & Co-Founder Gronda",
    website: "https://gronda.com/",
  },
  {
    quote: '"Personally, my growth as a leader owes much to his support. He challenges me effectively, contributing significantly to both my professional and personal development."',
    author: "Ambros, CEO & Founder WeDesignTrips and ASI GmbH",
    website: "https://www.asi-reisen.de/",
  },
];

const TestimonialSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-[43px] font-quicksand font-bold text-center mb-16 text-navy-dark leading-relaxed">
          What founders and leaders say about our collaboration
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-navy-dark hover:text-accent transition-colors -ml-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-navy-dark hover:text-accent transition-colors -mr-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="text-center">
                    <blockquote className="font-quicksand">
                      <p className="text-base md:text-lg leading-[1.6em] mb-10 text-navy-dark max-w-4xl mx-auto">
                        {testimonial.quote}
                      </p>

                      <footer>
                        <div className="font-bold text-base mb-1 text-navy-dark">
                          {testimonial.author}
                        </div>
                        <a
                          href={testimonial.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-dark/70 hover:text-accent transition-colors text-sm underline"
                        >
                          {testimonial.website}
                        </a>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-navy-dark w-3"
                    : "bg-navy-dark/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
