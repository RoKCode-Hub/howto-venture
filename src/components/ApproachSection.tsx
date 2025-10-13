import approachImage from "@/assets/approach-image.png";

const ApproachSection = () => {
  return (
    <section id="approach" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="bg-navy-dark text-white py-24 px-12 lg:px-20">
          <div className="max-w-xl">
            <h2 className="text-[43px] font-quicksand font-bold mb-12">Approach</h2>

            <div className="space-y-8 text-base leading-relaxed font-quicksand">
              <p>
                Our approach is hands-on and focused on making you a more impactful leader. 
                Working on your highest points of leverage involves doubling down on your strengths, 
                but also confronting the uncomfortable and uncovering opportunities for growth.
              </p>

              <p>
                Think of it as having a personal trainer who is dedicated to helping you realize 
                your greatest entrepreneurial aspirations. Just like a personal trainer would do, 
                this comes with both celebrating successes and providing candid feedback. With 
                working on the bigger picture and the important details. With specific instructions 
                and finding the fitting approach for you.
              </p>

              <p>
                And as you know from your day-to-day work, as rewarding as this journey can be, 
                it can also be very challenging. That is why we are not only your coach, but also 
                your sparring partner and sounding board. Committed to helping you achieve your 
                wildest dreams.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative min-h-[600px] md:min-h-full">
          <img
            src={approachImage}
            alt="Partnership and support"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Coral accent triangle */}
          <div 
            className="absolute bottom-0 right-0 w-48 h-48 bg-accent"
            style={{
              clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
