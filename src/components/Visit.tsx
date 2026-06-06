export function Visit() {
  return (
    <section id="visit" className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-terracotta blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-mustard blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="font-bangla text-mustard text-lg tracking-wide">
          ✦ আসুন, বসুন, চা খান ✦
        </div>
        <h2 className="mt-5 text-5xl md:text-7xl text-cream leading-[1.05]">
          Come,{" "}
          <em className="font-display text-mustard">sit awhile</em>
          <br /> at our bari.
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-cream/75 leading-relaxed">
          Book a visit, a piece, or just a conversation. We answer faster on
          WhatsApp than email — that's just the truth of being a small house.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918240633170"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-mustard text-ink text-sm uppercase tracking-[0.2em] hover:bg-cream transition-colors"
          >
            <span className="text-base">●</span> +91 8240 633 170
          </a>
          <a
            href="mailto:hello@sahajbari.in"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-cream/30 text-cream text-sm uppercase tracking-[0.2em] hover:border-mustard hover:text-mustard transition-colors"
          >
            hello@sahajbari.in
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          {[
            { k: "Address", v: "North Kolkata · West Bengal · Bharat", bn: "ঠিকানা" },
            { k: "Adda hours", v: "Tue – Sun · 11 AM to 8 PM", bn: "সময়" },
            { k: "Bhasha", v: "Bangla · English · Hindi", bn: "ভাষা" },
          ].map((c) => (
            <div key={c.k} className="border-t border-cream/15 pt-5">
              <div className="font-bangla text-mustard text-sm">{c.bn}</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-cream/60 mt-1">
                {c.k}
              </div>
              <div className="mt-2 text-cream">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
