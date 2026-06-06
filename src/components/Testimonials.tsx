import { useState } from "react";

const reviews = [
  {
    quote:
      "Owning a Sahaj Bari kantha feels like inheriting someone's grandmother's love. Quiet luxury at its truest.",
    name: "Ananya Sen",
    place: "Mumbai",
  },
  {
    quote:
      "I gifted their organic colours to my entire team for Holi. Months later, people still talk about the packaging and the story.",
    name: "Rohan Mehta",
    place: "Bengaluru",
  },
  {
    quote:
      "The dokra earrings are conversation pieces. But what I love most is knowing the artisan's name.",
    name: "Priya Iyer",
    place: "London",
  },
  {
    quote:
      "Bari ekta abhijata gondho-r moto — every parcel arrives wrapped in something more than paper.",
    name: "Debasmita Roy",
    place: "Kolkata",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="py-24 md:py-32 bg-cream-warm">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.32em] text-terracotta">
          · Words from the Bari ·
        </div>
        <div className="alpona-divider w-40 mx-auto mt-6" />

        <div className="mt-10 min-h-[16rem] flex flex-col justify-center">
          <div className="font-display text-mustard text-6xl leading-none">"</div>
          <blockquote className="mt-2 text-2xl md:text-3xl font-display italic text-ink/85 leading-snug">
            {r.quote}
          </blockquote>
          <div className="mt-8 font-bangla text-terracotta-deep text-lg">
            — {r.name}
          </div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-ink/55 mt-1">
            {r.place}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-10 bg-terracotta-deep" : "w-2 bg-terracotta-deep/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
