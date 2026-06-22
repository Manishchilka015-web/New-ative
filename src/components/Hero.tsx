export function Hero() {
  return (
    <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto relative overflow-hidden">
      {/* Subtle radial gradient background effect as seen in screenshot */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

      <div className="inline-block bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
        Top Rated Agency
      </div>
      
      <h1 className="font-heading font-black text-[13vw] sm:text-7xl md:text-8xl leading-[0.9] tracking-tighter italic uppercase mb-6">
        Hire <span className="text-[#FF2A54]">Influencer</span><br />
        Marketing <span className="text-[#2AE5E5]">Agency</span>
      </h1>
      
      <h2 className="font-heading font-black text-xl md:text-3xl uppercase tracking-tight mb-6">
        Find The Perfect Influencer For Your Brand
      </h2>
      
      <p className="text-gray-800 text-sm md:text-lg leading-relaxed max-w-4xl">
        Among today's leading influencer marketing agencies, <span className="font-bold text-black">Active Frame</span> is trusted by brands
        looking for real growth through influencer marketing. With a network of 100+ exclusive
        influencers across various niches, we connect brands with creators who genuinely fit their
        audience and goals. From influencer selection to campaign execution, we manage the entire
        process to ensure smooth collaborations and authentic content.
      </p>
    </section>
  );
}
