import pottery from "@/assets/craft-pottery.jpg";
import kantha from "@/assets/craft-kantha.jpg";
import jewelry from "@/assets/craft-jewelry.jpg";
import cane from "@/assets/craft-cane.jpg";

const items = [
  {
    img: pottery,
    title: "Mati · মাটি",
    sub: "Terracotta & clay",
    body: "Bankura wheels still turning under a tin roof. Cups, kalshi, diya — each one a fingerprint of the karigar.",
  },
  {
    img: kantha,
    title: "Suto · সুতো",
    sub: "Kantha & weaves",
    body: "Old sarees stitched into new mornings. Threads counted by lamplight, in pinks and mustards of memory.",
  },
  {
    img: jewelry,
    title: "Kaath · কাঠ",
    sub: "Wooden adornment",
    body: "Tabaij — heirlooms carved from rosewood and neem, meant to be worn as quietly as a prayer.",
  },
  {
    img: cane,
    title: "Bansh · বাঁশ",
    sub: "Cane & bamboo",
    body: "Baskets woven by women of the Sundarbans. Each curve holds a tide, a song, a granddaughter.",
  },
];

export function CraftGrid() {
  return (
    <section id="craft" className="relative py-24 md:py-32 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-terracotta">
              · The Craft ·
            </div>
            <h2 className="mt-3 text-4xl md:text-6xl leading-[1.05] text-ink max-w-2xl">
              Four hands. Four <em className="font-display">roots</em>.
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 leading-relaxed">
            Every collection at Sahaj Bari begins with a question:{" "}
            <span className="font-bangla text-terracotta-deep">
              এটা কে বানালো?
            </span>{" "}
            Who made this — and were they paid in stories as well as silver?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-3xl bg-cream border border-border shadow-frame ${
                i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-10"
              }`}
            >
              <div className="aspect-[5/6] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] text-terracotta-deep">
                {it.sub}
              </div>
              <div className="p-7 md:p-9">
                <h3 className="font-bangla text-3xl md:text-4xl text-terracotta-deep">
                  {it.title}
                </h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{it.body}</p>
                <a
                  href="https://wa.me/918240633170"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-terracotta-deep hover:text-terracotta"
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
