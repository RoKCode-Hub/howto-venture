import { Compass, Users, Map } from "lucide-react";

const FocusAreas = () => {
  const areas = [
    {
      icon: Compass,
      title: "Leading yourself",
      description:
        "Your leadership profile and values, personal productivity, strengths and weaknesses, triggers and fears, boundaries...",
    },
    {
      icon: Users,
      title: "Leading others",
      description:
        "Effective meetings, enabling direct reports, delegation, hiring and firing, building trust, accountability, feedback...",
    },
    {
      icon: Map,
      title: "Leading the company",
      description:
        "Strategic narrative, decision making, company culture, alignment, OKRs/WIGs etc, meeting cascades, change management...",
    },
  ];

  return (
    <section id="focus" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Focus areas
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
