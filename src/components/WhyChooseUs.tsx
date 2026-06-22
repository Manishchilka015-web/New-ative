import { User, LineChart, Mail, CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const steps = [
    {
      title: "Find The Right Creators.",
      description: "We help you find the best people to promote your brand. We match you with creators whose followers are your ideal customers.",
      icon: <User className="w-6 h-6 text-black" strokeWidth={2} />,
      iconBg: "bg-[#FFD13B]",
      points: [
        { title: "TARGET THE RIGHT PEOPLE.", desc: "Make sure your message reaches the exact people you want to sell to.", iconColor: "text-[#FF3B63]" },
        { title: "WORK WITH EXPERTS.", desc: "Team up with famous creators who know your business and their fans well.", iconColor: "text-[#FF3B63]" }
      ]
    },
    {
      title: "See How It's Going.",
      description: "See how well your ads are doing in real time. We make it easy to understand what's working and what's not.",
      icon: <LineChart className="w-6 h-6 text-white" strokeWidth={2} />,
      iconBg: "bg-[#FF3B63]",
      points: [
        { title: "FIX THINGS FAST.", desc: "Notice if fewer people are looking, so you can change the plan right away.", iconColor: "text-[#2AE5E5]" },
        { title: "DO BETTER NEXT TIME.", desc: "Learn from what happened so your next ad is even more successful.", iconColor: "text-[#2AE5E5]" }
      ]
    },
    {
      title: "Get Easy Updates.",
      description: "We send you simple reports so you don't have to guess. See the numbers that matter most, delivered straight to you.",
      icon: <Mail className="w-6 h-6 text-black" strokeWidth={2} />,
      iconBg: "bg-[#2AE5E5]",
      points: [
        { title: "SAVE TIME.", desc: "Stop doing boring math and let us send you the final numbers instead.", iconColor: "text-[#FFD13B]" },
        { title: "MAKE SMART CHOICES.", desc: "Use our clear updates to always know what your next steps should be.", iconColor: "text-[#FFD13B]" }
      ]
    }
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="font-heading font-black text-4xl md:text-5xl italic uppercase tracking-tighter mb-12 sm:mb-16 w-full">
        Why Choose <span className="text-[#2AE5E5]">Active Frame</span> For<br/>
        Influencer Marketing?
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-[2.5rem] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 shadow-sm">
            {/* Left side */}
            <div className="flex-1 flex flex-col items-start">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.iconBg}`}>
                {step.icon}
              </div>
              <h3 className="font-heading font-black text-3xl uppercase mb-4 tracking-tight leading-none">
                {step.title}
              </h3>
              <p className="font-bold text-sm text-gray-800 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Right side inner card */}
            <div className="flex-[1.2] bg-[#f8f9fa] rounded-[2rem] p-6 flex flex-col gap-4">
              {step.points.map((point, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 flex items-start gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <CheckCircle2 className={`w-6 h-6 mt-0.5 shrink-0 ${point.iconColor}`} />
                  <div>
                    <h4 className="font-bold text-sm tracking-wide mb-1 uppercase">{point.title}</h4>
                    <p className="text-sm font-medium text-gray-500 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-black text-white px-8 py-5 rounded-full font-bold text-sm uppercase tracking-wide text-center mt-16 shadow-lg inline-block">
        Talk to our marketing experts
      </div>
    </section>
  );
}
