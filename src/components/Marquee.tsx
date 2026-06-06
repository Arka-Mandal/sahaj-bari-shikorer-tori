const phrases = [
  "দেশজ শিকড়",
  "✦",
  "From Soil to Soul",
  "✦",
  "Heartcrafted by communities",
  "✦",
  "সহজে বাঁচার গল্প",
  "✦",
  "Made in Bharat",
  "✦",
  "Indigenous Lifestyle",
  "✦",
];

export function Marquee() {
  const items = [...phrases, ...phrases];
  return (
    <div className="border-y border-terracotta-deep/20 bg-cream-warm overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-4">
        {items.map((p, i) => (
          <span
            key={i}
            className={`mx-6 text-lg md:text-xl ${
              /[\u0980-\u09FF]/.test(p)
                ? "font-bangla text-terracotta-deep"
                : "font-display italic text-ink/80"
            }`}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
