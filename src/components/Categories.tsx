import sarees from "@/assets/cat-sarees.jpg";
import jewelry from "@/assets/craft-jewelry.jpg";
import perfume from "@/assets/cat-perfume.jpg";
import soap from "@/assets/cat-soap.jpg";
import colours from "@/assets/cat-colours.jpg";
import pottery from "@/assets/craft-pottery.jpg";
import cane from "@/assets/craft-cane.jpg";
import kantha from "@/assets/craft-kantha.jpg";

const cats = [
  { img: sarees, name: "Sarees", bn: "শাড়ি", note: "Handwoven · Jamdani · Tussar" },
  { img: jewelry, name: "Handcrafted Jewellery", bn: "গহনা", note: "Tribal · Dokra · Heirloom" },
  { img: perfume, name: "Natural Perfumes", bn: "আতর", note: "Botanical · Alcohol-free" },
  { img: soap, name: "Organic Soaps", bn: "সাবান", note: "Cold-pressed · Ayurvedic" },
  { img: colours, name: "Organic Colours", bn: "রঙ", note: "Plant-based · Holi safe" },
  { img: pottery, name: "Handcrafted Decor", bn: "সাজ", note: "Terracotta · Wood · Brass" },
  { img: cane, name: "Indigenous Lifestyle", bn: "জীবন", note: "Cane · Bamboo · Jute" },
  { img: kantha, name: "Artisanal Gifts", bn: "উপহার", note: "Curated · Gift-wrapped" },
];

export function Categories() {
  return (
    <section id="shop" className="relative py-24 md:py-32 bg-cream-warm">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.32em] text-terracotta">
              · Shop the Collection ·
            </div>
            <h2 className="mt-3 text-4xl md:text-6xl text-ink leading-[1.05] max-w-2xl">
              Eight worlds, <em className="font-display">one soil.</em>
            </h2>
          </div>
          <p className="max-w-sm text-ink/70 leading-relaxed font-bangla text-lg">
            শিকড় থেকে শিল্পে — মাটির গল্প আপনার ঘরে।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {cats.map((c, i) => (
            <a
              key={c.name}
              href="https://wa.me/918240633170"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border shadow-frame ${
                i === 0 || i === 5 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <div className={`overflow-hidden ${i === 0 || i === 5 ? "aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-cream">
                <div className="font-bangla text-mustard text-sm tracking-wide opacity-90">
                  {c.bn}
                </div>
                <div className="font-display text-xl md:text-2xl mt-1 leading-tight">
                  {c.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] mt-2 opacity-70">
                  {c.note}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-mustard opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Enquire →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
