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
    <section id="focus" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-[43px] font-quicksand font-bold text-center mb-20 text-navy-dark">
          Focus areas
        </h2>

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-40 h-40 mb-8">
                <img src={area.icon} alt={area.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-[43px] font-quicksand font-bold mb-6 text-navy-dark leading-tight">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base font-quicksand">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
