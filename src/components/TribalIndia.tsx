import tribal from "@/assets/tribal-bengal.jpg";

export function TribalIndia() {
  return (
    <section id="tribal" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="text-xs uppercase tracking-[0.32em] text-terracotta">
            · Tribal India ·
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl text-ink leading-[1.05]">
            Stories from the
            <br />
            <em className="font-display">heart of tribal India.</em>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-ink/75">
            Deep in the red-earth villages of Bankura, Purulia and the Sundarbans,
            tribal Bengal still wakes to the sound of looms and the smell of clay
            firing. Sahaj Bari travels these{" "}
            <span className="font-bangla text-terracotta-deep">গ্রাম</span> to
            listen — to learn — and to carry their craft to the world without ever
            taking their voice away.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              ["Tribal West Bengal", "Santhal, Munda & Lodha artisan clusters."],
              ["Indigenous Knowledge", "Recipes & techniques older than the British Raj."],
              ["Sustainable Livelihoods", "Fair wages, direct trade, no middlemen."],
              ["Cultural Preservation", "Documenting motifs, songs & oral histories."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4 items-start">
                <div className="mt-2 h-2 w-2 rounded-full bg-mustard shrink-0" />
                <div>
                  <div className="font-display text-xl text-terracotta-deep">
                    {t}
                  </div>
                  <div className="text-sm text-ink/70 leading-relaxed">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5 order-1 md:order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-terracotta/30 blur-3xl rounded-full" />
            <img
              src={tribal}
              alt="Tribal Bengali artisan at a handloom"
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-warm ring-1 ring-terracotta-deep/20"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream px-6 py-4 rounded-2xl shadow-frame border border-border max-w-[80%]">
              <div className="font-bangla text-terracotta-deep">
                "মাটি আমার মা, তাঁত আমার গান।"
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ink/60 mt-2">
                — Anjali Murmu, Weaver, Bankura
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
