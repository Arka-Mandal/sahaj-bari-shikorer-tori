const stats = [
  { n: "১২০+", en: "120+", l: "Women Empowered" },
  { n: "৪২", en: "42", l: "Artisans Supported" },
  { n: "১৬", en: "16", l: "Communities Connected" },
  { n: "২৫", en: "25", l: "Traditional Crafts Preserved" },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-24 md:py-32 bg-forest text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-mustard blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-terracotta blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="font-bangla text-mustard text-lg tracking-wide">
            ✦ আমাদের প্রভাব ✦
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl text-cream leading-[1.05]">
            Every purchase
            <br />
            <em className="font-display text-mustard">creates change.</em>
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            Not numbers on a page — these are mothers, daughters, grandmothers
            and the looms they keep alive. Your home holds their hours.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/15 rounded-3xl overflow-hidden border border-cream/15">
          {stats.map((s) => (
            <div
              key={s.l}
              className="bg-forest/80 backdrop-blur p-8 md:p-10 text-center hover:bg-ink/40 transition-colors duration-500"
            >
              <div className="font-bangla text-5xl md:text-6xl text-mustard">
                {s.n}
              </div>
              <div className="font-display text-cream/60 text-sm mt-1">
                ({s.en})
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-cream/85">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
