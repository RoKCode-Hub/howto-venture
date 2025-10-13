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
    <section id="focus" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Focus areas
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
                <img src={area.icon} alt={area.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
