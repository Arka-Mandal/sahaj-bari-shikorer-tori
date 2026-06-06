const notes = [
  {
    kicker: "Diary · 01",
    bn: "বর্ষার মাটি",
    title: "The smell of clay after first rain",
    body: "Our potter Hari-da says the wheel listens differently in Sraban. We agree — there is a softer hush to the cups he turns that month.",
  },
  {
    kicker: "Diary · 02",
    bn: "কাঁথার দাগ",
    title: "Why we don't iron our kantha",
    body: "Every wrinkle is a thumbprint of the woman who stitched it past midnight. We let them stay.",
  },
  {
    kicker: "Diary · 03",
    bn: "ঠাকুরদালান",
    title: "A house is a slow poem",
    body: "Visit our bari in North Kolkata. There is always tea, sometimes Tagore, and very little hurry.",
  },
];

export function Journal() {
  return (
    <section id="journal" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.28em] text-terracotta">
            · The Journal ·
          </div>
          <h2 className="mt-3 text-4xl md:text-6xl text-ink">
            Notes from the <em className="font-display">verandah</em>
          </h2>
          <div className="font-bangla mt-3 text-mustard text-lg">
            ✦ বারান্দার চিঠি ✦
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          {notes.map((n) => (
            <article
              key={n.title}
              className="group p-8 md:p-10 rounded-3xl border border-border bg-card hover:bg-cream-warm transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.28em] text-terracotta">
                  {n.kicker}
                </span>
                <span className="font-bangla text-sm text-terracotta-deep">
                  {n.bn}
                </span>
              </div>
              <h3 className="mt-6 text-2xl md:text-3xl text-ink leading-snug">
                {n.title}
              </h3>
              <p className="mt-4 text-ink/70 leading-relaxed text-[15px]">
                {n.body}
              </p>
              <div className="mt-8 alpona-divider w-20 mx-auto opacity-60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
