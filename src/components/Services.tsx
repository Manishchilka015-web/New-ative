import { User, Search, Pen, Zap, TrendingUp } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "DEDICATED CAMPAIGN SPECIALIST",
      description: "A single point of contact managing influencer collaborations, communication, and campaign execution from start to finish.",
      icon: <User className="w-5 h-5 text-white" fill="currentColor" />,
      iconBg: "bg-[#FF3B63]",
    },
    {
      title: "FIND THE RIGHT INFLUENCERS",
      description: "We discover and shortlist creators who align with your brand, target audience, and campaign goals for maximum impact.",
      icon: <Search className="w-5 h-5 text-black" strokeWidth={3} />,
      iconBg: "bg-[#FFD13B]",
    },
    {
      title: "CONTENT STRATEGY & SCRIPT DEVELOPMENT",
      description: "We craft campaign concepts and creator-ready scripts designed to boost engagement, reach, and brand awareness.",
      icon: <Pen className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />,
      iconBg: "bg-[#FF3B63]",
    },
    {
      title: "END-TO-END CAMPAIGN EXECUTION",
      description: "We handle the entire campaign process, ensuring smooth coordination, timely approvals, and successful delivery.",
      icon: <Zap className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />,
      iconBg: "bg-[#2AE5E5]",
    },
    {
      title: "PERFORMANCE REPORTING & OPTIMIZATION",
      description: "Track performance with detailed reports and valuable insights that drive smarter marketing decisions.",
      icon: <TrendingUp className="w-5 h-5 text-white" strokeWidth={3} />,
      iconBg: "bg-black",
    }
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="font-heading font-black text-4xl md:text-5xl italic uppercase tracking-tighter mb-8">
        What We <span className="text-[#FFD13B]">Provide?</span>
      </h2>

      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-[2rem] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${service.iconBg}`}>
              {service.icon}
            </div>
            <h3 className="font-heading font-black text-xl uppercase mb-3 tracking-tight">
              {service.title}
            </h3>
            <p className="font-bold text-xs md:text-sm text-gray-800 leading-relaxed uppercase">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
