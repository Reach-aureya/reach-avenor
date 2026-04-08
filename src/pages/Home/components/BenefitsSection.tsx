import { Zap, Eye, Share2, Layers, Sparkles, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Concept Development",
      description:
        "Move quickly from rough ideas to detailed 3D bag concepts, enabling faster iteration and reducing overall product development time."
    },
    {
      icon: Eye,
      title: "More Persuasive Product Visualization",
      description:
        "Create realistic 3D renders that help stakeholders, buyers, and teams clearly understand design intent, materials, and finishes."
    },
    {
      icon: Share2,
      title: "Stronger Cross-Team Collaboration",
      description:
        "Align design, development, merchandising, and manufacturing teams with shared visual assets, reducing miscommunication and rework."
    },
    {
      icon: Layers,
      title: "Reusable Digital Product Assets",
      description:
        "Use the same 3D bag models across concept development, presentations, marketing, and e-commerce, maximizing value from each design."
    },
    {
      icon: Sparkles,
      title: "Reduced Dependence on Physical Sampling",
      description:
        "Leverage digital prototyping to minimize multiple rounds of physical samples, saving time, cost, and material resources."
    },
    {
      icon: TrendingUp,
      title: "Stronger Brand Presentation and Market Impact",
      description:
        "Deliver premium-quality visuals for catalogs, campaigns, and digital platforms, enhancing brand perception and customer engagement."
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-3f4f17">
          Benefits of REACH Avenor
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Design, visualize, and present bags with clarity, speed, and impact using advanced 3D workflows.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-e6f6a5 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-adc168 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;