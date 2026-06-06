import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { ShoppingBag, Check, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Sahaj Bari" }] };
    return {
      meta: [
        { title: `${p.name} · Sahaj Bari` },
        { name: "description", content: p.story.slice(0, 155) },
        { property: "og:title", content: `${p.name} · Sahaj Bari` },
        { property: "og:description", content: p.story.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:image", content: p.hero },
      ],
      links: [{ rel: "canonical", href: `/shop/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <div className="font-bangla text-5xl text-terracotta-deep">পাওয়া গেল না</div>
        <p className="mt-4 text-ink/70">This piece hasn't been crafted yet.</p>
        <Link
          to="/"
          className="mt-6 inline-flex px-6 py-3 rounded-full bg-terracotta-deep text-cream text-sm uppercase tracking-[0.18em]"
        >
          Back to the bari
        </Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, setOpen } = useCart();
  const [activeImg, setActiveImg] = useState(product.hero);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(
      {
        slug: product.slug,
        name: product.name,
        bangla: product.bangla,
        price: product.price,
        image: product.hero,
      },
      qty,
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
    setOpen(true);
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-terracotta-deep/80 hover:text-terracotta-deep mb-10"
          >
            <ArrowLeft size={14} /> Back to the bari
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative overflow-hidden rounded-3xl bg-cream-warm shadow-warm border border-border">
                <div className="aspect-[4/5]">
                  <img
                    src={activeImg}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.24em] text-terracotta-deep border border-border">
                  {product.tagline}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(g)}
                    className={`aspect-square overflow-hidden rounded-xl border transition-all ${
                      activeImg === g
                        ? "border-terracotta-deep ring-2 ring-terracotta-deep/30"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={g} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="lg:pt-4">
              <div className="font-bangla text-mustard text-2xl tracking-wide">
                {product.bangla}
              </div>
              <h1 className="mt-2 text-4xl md:text-5xl text-ink leading-[1.05]">
                {product.name}
              </h1>
              <div className="alpona-divider w-32 mt-5" />

              <blockquote className="mt-6 font-display italic text-xl md:text-2xl text-terracotta-deep border-l-2 border-mustard pl-5">
                "{product.poem}"
              </blockquote>

              <p className="mt-7 text-ink/75 leading-relaxed">{product.story}</p>

              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-4xl text-terracotta-deep">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs uppercase tracking-[0.22em] text-ink/55">
                  {product.priceLabel}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center border border-border rounded-full bg-card overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-3 hover:bg-cream-warm transition-colors"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-display text-lg">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-3 hover:bg-cream-warm transition-colors"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-all shadow-warm ${
                    added
                      ? "bg-forest text-cream"
                      : "bg-terracotta-deep text-cream hover:bg-terracotta"
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={16} /> Added to bari
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} /> Add to cart
                    </>
                  )}
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-ink/60">
                <span>✦ Authentic</span>
                <span>✦ Handmade</span>
                <span>✦ Ethically sourced</span>
                <span>✦ Community crafted</span>
              </div>

              {/* Details accordion */}
              <div className="mt-12 space-y-6">
                <DetailBlock title="Origin" bn="উৎস">
                  <p>{product.origin}</p>
                  <p className="mt-2 text-ink/65">
                    Crafted by {product.artisan}.
                  </p>
                </DetailBlock>
                <DetailBlock title="Specifications" bn="বিবরণ">
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                    {product.details.map((d) => (
                      <div key={d.label} className="flex justify-between gap-4 border-b border-border/60 py-2">
                        <dt className="text-ink/60">{d.label}</dt>
                        <dd className="text-ink text-right">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                </DetailBlock>
                <DetailBlock title="Materials" bn="উপকরণ">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.materials.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </DetailBlock>
                <DetailBlock title="Care" bn="যত্ন">
                  <ul className="list-disc pl-5 space-y-1">
                    {product.care.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </DetailBlock>
              </div>
            </div>
          </div>

          {/* Story strip */}
          <section className="mt-24 md:mt-32 bg-forest text-cream rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="font-bangla text-mustard text-lg">
                  ✦ কারিগরের গল্প ✦
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl text-cream leading-tight">
                  From the hands of <em className="font-display text-mustard">{product.artisan.split("—")[0].trim()}</em>
                </h3>
                <p className="mt-5 text-cream/80 leading-relaxed">
                  When you bring home a Sahaj Bari piece, you are not buying an
                  object. You are placing your name on a thread that begins in
                  {" "}{product.origin.split("·")[0].trim()} and ends quietly in
                  your everyday. We pay our artisans first, always — before the
                  piece ever leaves their loom.
                </p>
              </div>
              <div className="aspect-[4/3] md:aspect-auto">
                <img
                  src={product.gallery[1] ?? product.hero}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="mt-24 md:mt-32 pb-24">
            <div className="text-xs uppercase tracking-[0.32em] text-terracotta text-center">
              · Wander further ·
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl text-ink text-center">
              You may also love
            </h3>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/shop/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-card aspect-[4/5]">
                    <img
                      src={r.hero}
                      alt={r.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="font-bangla text-xs text-terracotta">
                      {r.bangla}
                    </div>
                    <div className="font-display text-lg text-ink group-hover:text-terracotta-deep transition-colors">
                      {r.name}
                    </div>
                    <div className="text-xs text-ink/55 mt-0.5">
                      {r.priceLabel}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}

function DetailBlock({
  title,
  bn,
  children,
}: {
  title: string;
  bn: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border pt-5">
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="font-display text-xl text-terracotta-deep">{title}</h4>
        <span className="font-bangla text-sm text-ink/55">{bn}</span>
      </div>
      <div className="text-ink/75 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
