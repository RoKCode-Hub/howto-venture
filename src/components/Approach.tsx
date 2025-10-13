import approachImage from "@/assets/approach-image.png";

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Approach
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-6 text-lg leading-relaxed text-foreground order-2 md:order-1">
            <p>
              Our approach is hands-on and focused on making you a more impactful leader. Working on
              your highest points of leverage involves doubling down on your strengths, but also
              confronting the uncomfortable and uncovering opportunities for growth.
            </p>
            <p>
              Think of it as having a personal trainer who is dedicated to helping you realize your
              greatest entrepreneurial aspirations. Just like a personal trainer would do, this comes
              with both celebrating successes and providing candid feedback. With working on the
              bigger picture and the important details. With specific instructions and finding the
              fitting approach for you.
            </p>
            <p>
              And as you know from your day-to-day work, as rewarding as this journey can be, it can
              also be very challenging. That is why we are not only your coach, but also your sparring
              partner and sounding board. Committed to helping you achieve your wildest dreams.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src={approachImage} 
              alt="Approach illustration" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
