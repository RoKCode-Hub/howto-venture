import compassIcon from "@/assets/compass.png";
import leadershipIcon from "@/assets/leadership.png";
import mapIcon from "@/assets/map.png";

const FocusAreas = () => {
  const areas = [
    {
      icon: compassIcon,
      title: "Leading yourself",
      description:
        "Your leadership profile and values, personal productivity, strengths and weaknesses, triggers and fears, boundaries...",
    },
    {
      icon: leadershipIcon,
      title: "Leading others",
      description:
        "Effective meetings, enabling direct reports, delegation, hiring and firing, building trust, accountability, feedback...",
    },
    {
      icon: mapIcon,
      title: "Leading the company",
      description:
        "Strategic narrative, decision making, company culture, alignment, OKRs/ WIGs etc, meeting cascades, change management...",
    },
  ];

  return (
    <section id="focus" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-[43px] font-quicksand font-bold mb-16 text-primary">
          Focus areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-12 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-40 h-40 mb-8 mx-auto transition-transform duration-300 group-hover:scale-110">
                <img src={area.icon} alt={area.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-quicksand font-bold mb-6 text-primary text-center transition-colors duration-300 group-hover:text-accent">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base font-quicksand text-center">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FocusAreas;
