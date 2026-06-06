import { useState, useEffect } from "react";
import logoAsset from "@/assets/sahaj-bari-logo.asset.json";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#story", label: "Our Story", bn: "কথা" },
  { href: "#craft", label: "Craft", bn: "শিল্প" },
  { href: "#journal", label: "Journal", bn: "ডায়েরি" },
  { href: "#visit", label: "Visit", bn: "ঠিকানা" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
