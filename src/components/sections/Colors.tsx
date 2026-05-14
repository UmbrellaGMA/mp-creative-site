export function Colors() {
  const colors = [
    { name: "Black", hex: "#0F0F0F", text: "text-white" },
    { name: "Dark Gray", hex: "#202020", text: "text-white" },
    { name: "Brand Yellow", hex: "#00F0FF", text: "text-brand-dark" },
  ];

  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-sm tracking-widest uppercase text-gray-400 mb-12">CORES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div 
              key={index} 
              className={`rounded-md p-8 flex flex-col justify-end aspect-[4/5] md:aspect-[3/4] ${color.text} shadow-xl border border-white/5`}
              style={{ backgroundColor: color.hex }}
            >
              <div>
                <p className="font-heading font-bold text-2xl mb-1">{color.name}</p>
                <p className="font-mono text-sm opacity-70 uppercase">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
