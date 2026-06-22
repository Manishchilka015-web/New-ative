export function Stats() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
      <div className="flex-1 bg-[#FF3B63] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center text-white">
        <h2 className="font-heading font-black text-6xl md:text-7xl mb-2">300+</h2>
        <p className="font-bold text-sm tracking-wider uppercase">Creators We Have</p>
      </div>
      <div className="flex-1 bg-[#2AE5E5] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center text-black">
        <h2 className="font-heading font-black text-6xl md:text-7xl mb-2">100+</h2>
        <p className="font-bold text-sm tracking-wider uppercase">Brands We Have Worked</p>
      </div>
    </section>
  );
}
