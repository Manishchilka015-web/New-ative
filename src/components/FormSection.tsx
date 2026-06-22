export function FormSection() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto flex flex-col items-center">
      <div className="bg-black text-white px-6 py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-wide text-center mb-16 shadow-lg inline-block">
        Get access to 300+ influencers for your upcoming campaign
      </div>

      <div className="w-full bg-[#f4f4f4] rounded-[3rem] p-6 sm:p-12 md:p-16">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm max-w-5xl mx-auto">
          <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-8">
            Fill Your Campaign Form
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase tracking-wide">Your Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase tracking-wide">Brand Name</label>
              <input 
                type="text" 
                placeholder="Brand Name" 
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase tracking-wide">Your Contact No.</label>
              <input 
                type="tel" 
                placeholder="Your Contact No." 
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-xs uppercase tracking-wide">Business Email Address</label>
              <input 
                type="email" 
                placeholder="Business Email Address" 
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-xs uppercase tracking-wide">Brand Website Link</label>
              <input 
                type="url" 
                placeholder="Your Brand Website Link (e.g. https://...)" 
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-xs uppercase tracking-wide">Campaign Details</label>
              <textarea 
                placeholder="Tell us about your campaign details..." 
                rows={5}
                className="bg-[#FCFAF4] border border-transparent focus:border-black rounded-2xl px-5 py-4 w-full outline-none font-medium placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="md:col-span-2 bg-[#FFD13B] text-black font-bold uppercase tracking-wider rounded-2xl px-6 py-5 mt-4 hover:bg-yellow-400 transition-colors w-full"
            >
              Get Your Campaign Plan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
