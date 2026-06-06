import sarees from "@/assets/cat-sarees.jpg";
import jewelry from "@/assets/craft-jewelry.jpg";
import perfume from "@/assets/cat-perfume.jpg";
import soap from "@/assets/cat-soap.jpg";
import colours from "@/assets/cat-colours.jpg";
import pottery from "@/assets/craft-pottery.jpg";
import cane from "@/assets/craft-cane.jpg";
import kantha from "@/assets/craft-kantha.jpg";
import storyImg from "@/assets/story-paragraph.jpg";
import tribal from "@/assets/tribal-bengal.jpg";

export type Product = {
  slug: string;
  name: string;
  bangla: string;
  tagline: string;
  hero: string;
  gallery: string[];
  price: number;
  priceLabel: string;
  story: string;
  poem: string;
  origin: string;
  artisan: string;
  details: { label: string; value: string }[];
  materials: string[];
  care: string[];
};

export const products: Product[] = [
  {
    slug: "sarees",
    name: "Handwoven Sarees",
    bangla: "শাড়ি",
    tagline: "Jamdani · Tussar · Tangail",
    hero: sarees,
    gallery: [sarees, kantha, storyImg, tribal],
    price: 8400,
    priceLabel: "from ₹8,400",
    story:
      "Each saree begins on a wooden loom in Phulia or Shantipur, where a weaver counts threads by the gentle pace of his breath. Six yards of cotton or tussar slowly emerge — one motif, one row, one prayer at a time. Worn by your grandmother in a different cadence, now reborn for yours.",
    poem: "ছয় হাতের গল্প, এক জনমের ভালোবাসা।",
    origin: "Phulia & Shantipur, Nadia · West Bengal",
    artisan: "Sukumar Basak — third-generation handloom master",
    details: [
      { label: "Length", value: "6.5 yards (saree) + 0.8 yards (blouse piece)" },
      { label: "Weave", value: "Single-warp, double-weft jamdani" },
      { label: "Loom time", value: "14–22 days per piece" },
    ],
    materials: ["100% organic cotton or pure tussar silk", "Natural plant dyes"],
    care: ["Dry clean for first wash", "Hand wash cold thereafter, dry in shade"],
  },
  {
    slug: "jewellery",
    name: "Handcrafted Jewellery",
    bangla: "গহনা",
    tagline: "Dokra · Tribal · Heirloom",
    hero: jewelry,
    gallery: [jewelry, pottery, tribal, sarees],
    price: 2200,
    priceLabel: "from ₹2,200",
    story:
      "Forged in the 4,000-year-old lost-wax technique by the Dhokra Damar tribes of Bankura. Beeswax is shaped, sheathed in clay, then fired until molten brass replaces the wax — a single-cast piece, never to be repeated.",
    poem: "ধাতু গলে, গান হয়।",
    origin: "Bikna village, Bankura · West Bengal",
    artisan: "Lalita Karmakar & the Dhokra women's collective",
    details: [
      { label: "Technique", value: "Cire perdue (lost-wax casting)" },
      { label: "Finish", value: "Hand-polished, unlacquered" },
      { label: "Edition", value: "One-of-one, no two identical" },
    ],
    materials: ["Brass & bell metal alloy", "Beeswax & river clay (mould)"],
    care: ["Wipe with soft dry cloth", "Avoid water & perfume contact"],
  },
  {
    slug: "perfumes",
    name: "Natural Perfumes",
    bangla: "আতর",
    tagline: "Botanical · Alcohol-free",
    hero: perfume,
    gallery: [perfume, soap, storyImg, colours],
    price: 1450,
    priceLabel: "from ₹1,450",
    story:
      "Distilled the old way — copper degs, sandalwood fires, and rose petals plucked before sunrise. Our attars rest in deer-grass-lined bottles for forty days before they meet your skin. No alcohol, no synthetics, no rush.",
    poem: "এক ফোঁটায় ভোরের ভিজে মাটি।",
    origin: "Kannauj, Uttar Pradesh · with botanicals from Bengal",
    artisan: "Master Hakim Ali, sixth-generation attar-saaz",
    details: [
      { label: "Volume", value: "8 ml roll-on, hand-blown bottle" },
      { label: "Notes", value: "Mitti · Gulab · Bela · Sandal · Vetiver" },
      { label: "Maturation", value: "Aged 40 days minimum" },
    ],
    materials: ["100% steam-distilled essential oils", "Sandalwood carrier base"],
    care: ["Store away from sunlight", "Best within 24 months of opening"],
  },
  {
    slug: "soaps",
    name: "Organic Soaps",
    bangla: "সাবান",
    tagline: "Cold-pressed · Ayurvedic",
    hero: soap,
    gallery: [soap, perfume, colours, storyImg],
    price: 320,
    priceLabel: "from ₹320",
    story:
      "Cold-pressed in small copper vats over four weeks. We mill in raw turmeric from Bankura, neem from our backyard, and oats from a Birbhum mill. Each bar cures slowly, like good bread.",
    poem: "ত্বকের গায়ে দাদিমার রান্নাঘর।",
    origin: "Birbhum · West Bengal",
    artisan: "Shobha-di's women's soap cooperative (11 members)",
    details: [
      { label: "Weight", value: "100 g hand-cut bar" },
      { label: "Cure time", value: "28 days" },
      { label: "pH", value: "Skin-neutral, dermatologist-tested" },
    ],
    materials: ["Cold-pressed coconut & sesame oils", "Turmeric, neem, sandal, oat"],
    care: ["Keep on a draining dish between uses", "Best within 12 months"],
  },
  {
    slug: "colours",
    name: "Organic Holi Colours",
    bangla: "রঙ",
    tagline: "Plant-based · Skin safe",
    hero: colours,
    gallery: [colours, soap, sarees, storyImg],
    price: 480,
    priceLabel: "from ₹480",
    story:
      "Marigold for gold, hibiscus for pink, indigo for blue, turmeric for sun. We grind, sieve and blend with a base of arrowroot — colours so safe a child could taste them. We dare you to play a slow Holi this year.",
    poem: "রঙ মাটির, খুশি আকাশের।",
    origin: "Murshidabad flower farms · West Bengal",
    artisan: "The Sahaj Bari women's collective",
    details: [
      { label: "Pack", value: "Set of 5 × 80 g terracotta-pot tins" },
      { label: "Base", value: "Arrowroot starch" },
      { label: "Tested", value: "Dermatologically safe, biodegradable" },
    ],
    materials: ["Marigold, hibiscus, indigo, turmeric, spinach extracts"],
    care: ["Store dry, away from moisture"],
  },
  {
    slug: "decor",
    name: "Handcrafted Decor",
    bangla: "সাজ",
    tagline: "Terracotta · Wood · Brass",
    hero: pottery,
    gallery: [pottery, cane, jewelry, storyImg],
    price: 1100,
    priceLabel: "from ₹1,100",
    story:
      "Bankura horses, Krishnanagar dolls, terracotta diyas that have warmed Bengali courtyards for three centuries. We work with families who still spin clay by foot and fire in pit kilns once a week, never more.",
    poem: "মাটির ঘ্রাণে ঘর হয় তীর্থ।",
    origin: "Panchmura village, Bankura · West Bengal",
    artisan: "The Kumbhakar potter family",
    details: [
      { label: "Finish", value: "Slip-coated, low-fire terracotta" },
      { label: "Size", value: "Varies — see individual piece" },
      { label: "Style", value: "Bankura motifs, hand-burnished" },
    ],
    materials: ["River clay & rice husk", "Natural ochre slip"],
    care: ["Wipe with dry cloth", "Indoor use; keep from prolonged rain"],
  },
  {
    slug: "lifestyle",
    name: "Indigenous Lifestyle",
    bangla: "জীবন",
    tagline: "Cane · Bamboo · Jute",
    hero: cane,
    gallery: [cane, kantha, tribal, pottery],
    price: 680,
    priceLabel: "from ₹680",
    story:
      "Baskets, lamps, trays and floor mats woven by the women of the Sundarbans from sustainably harvested cane and bamboo. Each piece holds the shape of a tide, a song, a granddaughter's first lesson at the loom.",
    poem: "বাঁশের ভেতরে নদীর গান।",
    origin: "Sundarbans delta · West Bengal",
    artisan: "Mousumi-di & 22 women weavers",
    details: [
      { label: "Material", value: "Sustainably harvested cane / bamboo" },
      { label: "Weave", value: "Tight diagonal twill, hand-finished" },
      { label: "Edition", value: "Small batch, signed by maker" },
    ],
    materials: ["Cane, bamboo, jute thread, natural oil finish"],
    care: ["Dust with soft brush; avoid prolonged damp"],
  },
  {
    slug: "gifts",
    name: "Artisanal Gifts",
    bangla: "উপহার",
    tagline: "Curated · Gift-wrapped",
    hero: kantha,
    gallery: [kantha, perfume, soap, jewelry],
    price: 1800,
    priceLabel: "from ₹1,800",
    story:
      "Hand-curated heirloom hampers — a kantha runner, an attar, two soap bars, and a hand-written note in a sal-leaf box. Wrapped in handmade khadi, tied with red sutli. The kind of gift that gets photographed before it gets opened.",
    poem: "উপহার নয়, একটা চিঠি।",
    origin: "Curated in our North Kolkata bari",
    artisan: "A circle of seven artisan families",
    details: [
      { label: "Hamper size", value: "Small · Medium · Large (custom on request)" },
      { label: "Includes", value: "4–7 pieces + hand-written note" },
      { label: "Lead time", value: "3–5 days for personalisation" },
    ],
    materials: ["Sal-leaf box", "Khadi wrap, jute twine"],
    care: ["See individual pieces inside the hamper"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
