import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "HOW MUCH DO BRANDS PAY FOR INFLUENCER MARKETING? DO YOU ACCEPT BARTER COLLABORATION?",
      answer: "The cost varies significantly based on the follower count, engagement rate, and platform. We handle both paid and barter collaborations depending on the brand's budget and creator preferences."
    },
    {
      question: "WHICH TYPES OF INFLUENCERS DO YOU WORK WITH?",
      answer: "We work with a wide range of creators including content creators, industry experts, micro-influencers, and celebrities across various niches like tech, lifestyle, beauty, and more."
    },
    {
      question: "ON WHICH PLATFORMS CAN BRANDS RUN CAMPAIGNS WITH YOU?",
      answer: "We focus on all major social media platforms including Instagram, YouTube, TikTok, LinkedIn, and X (Twitter)."
    },
    {
      question: "HOW LONG DOES IT TAKE TO GET A CAMPAIGN LIVE?",
      answer: "A standard campaign takes anywhere from 1 to 3 weeks from the initial briefing to the launch, depending on creator availability and content approval processes."
    }
  ];

  return (
    <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto flex flex-col items-center">
      <h2 className="font-heading font-black text-4xl md:text-5xl italic uppercase tracking-tighter text-center mb-2">
        Frequently Asked <span className="text-[#FF3B63]">Questions</span>
      </h2>
      <p className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-12 text-center">
        Everything you need to know before we get started.
      </p>

      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 cursor-pointer shadow-sm"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide pr-8">
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#FF3B63] text-white' : 'bg-[#2AE5E5] text-black'}`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>
              {isOpen && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
