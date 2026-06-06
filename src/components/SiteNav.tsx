import { useState, useEffect } from "react";
import logoAsset from "@/assets/sahaj-bari-logo.asset.json";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { href: "/#shop", label: "Shop", bn: "দোকান" },
  { href: "/#story", label: "Story", bn: "কথা" },
  { href: "/#impact", label: "Impact", bn: "প্রভাব" },
  { href: "/#visit", label: "Visit", bn: "ঠিকানা" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Sahaj Bari logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full ring-1 ring-terracotta-deep/30 object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl text-terracotta-deep tracking-wide">
              Sahaj Bari
            </div>
            <div className="font-bangla text-[11px] md:text-xs text-muted-foreground -mt-0.5">
              সহজ বাড়ি · est. ২০২৫
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group text-sm uppercase tracking-[0.18em] text-ink/80 hover:text-terracotta-deep transition-colors"
            >
              {l.label}
              <span className="block font-bangla text-[10px] tracking-normal text-muted-foreground group-hover:text-terracotta">
                {l.bn}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative inline-flex items-center justify-center h-10 w-10 md:h-11 md:w-11 rounded-full border border-terracotta-deep/30 text-terracotta-deep hover:bg-terracotta-deep hover:text-cream transition-colors"
          >
            <ShoppingBag size={17} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-terracotta-deep text-cream text-[10px] font-medium flex items-center justify-center ring-2 ring-cream">
                {count}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/918240633170"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-deep text-cream text-sm tracking-wide hover:bg-terracotta transition-colors"
          >
            Book on WhatsApp
          </a>

          <button
            className="md:hidden text-ink p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream-warm border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base uppercase tracking-[0.18em] text-ink"
              >
                {l.label}{" "}
                <span className="font-bangla text-xs text-muted-foreground">
                  · {l.bn}
                </span>
              </a>
            ))}
            <a
              href="https://wa.me/918240633170"
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-terracotta-deep text-cream text-sm"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
