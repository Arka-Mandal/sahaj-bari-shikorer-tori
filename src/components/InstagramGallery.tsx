import a from "@/assets/craft-pottery.jpg";
import b from "@/assets/craft-kantha.jpg";
import c from "@/assets/craft-jewelry.jpg";
import d from "@/assets/craft-cane.jpg";
import e from "@/assets/cat-sarees.jpg";
import f from "@/assets/cat-perfume.jpg";
import g from "@/assets/cat-soap.jpg";
import h from "@/assets/cat-colours.jpg";

const imgs = [a, b, c, d, e, f, g, h];

export function InstagramGallery() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.32em] text-terracotta">
          · @sahajbari ·
        </div>
        <h2 className="mt-3 text-4xl md:text-5xl text-ink leading-[1.05]">
          A bari, lived <em className="font-display">on Instagram.</em>
        </h2>
        <p className="mt-4 text-ink/65 max-w-xl mx-auto">
          Follow along for slow mornings, artisan stories and small drops.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
          {imgs.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-terracotta-deep/0 group-hover:bg-terracotta-deep/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 text-2xl">
                  ⊕
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
