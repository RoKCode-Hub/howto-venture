import approachImage from "@/assets/approach-image.png";

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-[43px] font-quicksand font-bold text-center mb-20 text-navy-dark">
          Approach
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          <div className="space-y-6 text-base leading-[1.6em] font-quicksand text-navy-dark">
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

          <div className="flex justify-center">
            <img 
              src={approachImage} 
              alt="Approach illustration" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
