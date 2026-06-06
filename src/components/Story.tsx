import storyImg from "@/assets/story-paragraph.jpg";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 bg-mustard/40 blur-2xl rounded-full" />
            <img
              src={storyImg}
              alt="A North Kolkata para at golden hour"
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover rounded-t-[180px] shadow-warm ring-1 ring-terracotta-deep/20"
            />
            <div className="absolute bottom-5 -right-3 md:-right-6 bg-cream px-5 py-3 rounded-full shadow-frame border border-border">
              <span className="font-bangla text-sm text-terracotta-deep">
                উত্তর কলকাতার গলি
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.28em] text-terracotta">
            · The Story ·
          </div>
          <h2 className="mt-4 text-4xl md:text-6xl text-ink leading-[1.05]">
            Born in a <em className="font-display">para</em>,
            <br />
            raised by the soil.
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-ink/75">
            Sahaj Bari began as a quiet courtyard conversation — between a
            grandmother's <span className="font-bangla">কাঁথা</span>, a potter's
            wheel in Bankura, and the perfume of damp earth after first rain. We
            are a small, slow house gathering the indigenous craft of Bharat and
            placing it — gently — into your everyday.
          </p>

          <blockquote className="mt-9 border-l-2 border-mustard pl-6 italic font-display text-2xl md:text-3xl text-terracotta-deep">
            "We don't sell objects. We pass on heirlooms that haven't yet been
            held."
          </blockquote>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "৪২", l: "Karigar families" },
              { n: "১৬", l: "Bengal villages" },
              { n: "১০০%", l: "Heartcrafted" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-bangla text-3xl md:text-4xl text-terracotta-deep">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
