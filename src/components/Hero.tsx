import heroImg from "@/assets/hero-rajbari.jpg";
import logoAsset from "@/assets/sahaj-bari-logo.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-24 md:pt-28 overflow-hidden"
    >
      {/* Background image with arch */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="North Kolkata heritage courtyard with stained glass"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/55 via-cream/30 to-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/40 via-transparent to-cream/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-20">
        {/* top eyebrow */}
        <div className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.32em] text-terracotta-deep">
          <span className="h-px w-12 bg-terracotta-deep/40" />
          <span>Estd · ২০২৫ · North Kolkata</span>
          <span className="h-px w-12 bg-terracotta-deep/40" />
        </div>

        {/* Logo medallion */}
        <div className="flex justify-center mt-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-mustard/30 blur-2xl scale-110" />
            <img
              src={logoAsset.url}
              alt="Sahaj Bari emblem"
              className="relative h-28 w-28 md:h-36 md:w-36 rounded-full ring-4 ring-cream shadow-warm object-cover"
            />
          </div>
        </div>

        {/* Bengali display + headline */}
        <h1 className="mt-10 text-center font-bangla text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-terracotta-deep">
          সহজ বাড়ি
        </h1>
        <div className="mt-3 text-center font-display italic text-2xl md:text-4xl text-ink/85">
          From Soil to Soul.
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-center text-base md:text-lg leading-relaxed text-ink/70">
          A quiet North Kolkata house of{" "}
          <span className="font-bangla text-terracotta-deep">দেশজ শিকড়</span> —
          handwoven kantha, terracotta, dokra, cane and verse. Indigenous
          lifestyle, heartcrafted by communities of Bharat 🌱
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918240633170"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-terracotta-deep text-cream text-sm uppercase tracking-[0.18em] hover:bg-terracotta transition-colors shadow-warm"
          >
            Book a piece
          </a>
          <a
            href="#craft"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-terracotta-deep/40 text-terracotta-deep text-sm uppercase tracking-[0.18em] hover:bg-terracotta-deep hover:text-cream transition-colors"
          >
            Wander the craft
          </a>
        </div>

        {/* scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 text-terracotta-deep/70">
          <div className="alpona-divider w-40" />
          <div className="font-bangla text-sm">নিচে নামুন</div>
          <div className="h-10 w-px bg-terracotta-deep/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
