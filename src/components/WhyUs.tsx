const features = [
  {
    icon: "🌱",
    title: "Indigenous Lifestyle",
    body: "Rooted in traditional wisdom and the slow, mindful rhythm of village living.",
  },
  {
    icon: "🌿",
    title: "Sustainable & Earth Friendly",
    body: "Designed with quiet respect for the soil and the generations still to come.",
  },
  {
    icon: "🤝",
    title: "Community Empowerment",
    body: "Every rupee travels back to the rural & tribal hands that shaped the piece.",
  },
  {
    icon: "👩",
    title: "Women Empowerment",
    body: "Building dignified, sustainable livelihoods for the women artisans of Bharat.",
  },
  {
    icon: "🌾",
    title: "Authentic Craftsmanship",
    body: "No machine repeats a heart. Each piece is handmade — beautifully imperfect.",
  },
  {
    icon: "🪶",
    title: "Rare & Limited",
    body: "Small-batch heirlooms, never mass produced. When it's gone, it's gone.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.32em] text-terracotta">
            · Why Sahaj Bari ·
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl text-ink leading-[1.05]">
            Quiet luxury, <em className="font-display">deeply rooted.</em>
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            Six promises we keep — to the soil, to the karigar, and to you.
          </p>
          <div className="alpona-divider w-40 mx-auto mt-8" />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-warm overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-mustard/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-display text-2xl text-terracotta-deep">
                  {f.title}
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed text-sm">
                  {f.body}
                </p>
                <div className="mt-6 h-px w-10 bg-terracotta-deep/30 group-hover:w-20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
