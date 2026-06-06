import { useCart } from "@/lib/cart";
import { ShoppingBag, X, Minus, Plus } from "lucide-react";
import { useEffect } from "react";

export function CartDrawer() {
  const { items, total, count, setQty, remove, open, setOpen, clear } = useCart();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const message = encodeURIComponent(
    `Namaskar Sahaj Bari! I'd like to order:\n\n${items
      .map((i) => `• ${i.name} (${i.bangla}) × ${i.qty} — ₹${i.qty * i.price}`)
      .join("\n")}\n\nTotal: ₹${total}\n\nKindly share next steps 🌱`,
  );

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}
      <aside
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-cream shadow-warm transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-terracotta">
              Your bari basket
            </div>
            <div className="font-display text-2xl text-terracotta-deep flex items-center gap-3">
              <ShoppingBag size={20} /> {count} {count === 1 ? "piece" : "pieces"}
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-cream-warm transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-ink/60 gap-3">
              <div className="font-bangla text-3xl text-terracotta-deep/40">
                খালি ঝুড়ি
              </div>
              <div className="text-sm">Your basket waits patiently.</div>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((i) => (
                <li
                  key={i.slug}
                  className="flex gap-4 bg-card border border-border rounded-2xl p-3"
                >
                  <img
                    src={i.image}
                    alt={i.name}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bangla text-xs text-terracotta">
                      {i.bangla}
                    </div>
                    <div className="font-display text-base text-ink leading-tight">
                      {i.name}
                    </div>
                    <div className="text-sm text-ink/70 mt-1">
                      ₹{i.price.toLocaleString("en-IN")}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => setQty(i.slug, i.qty - 1)}
                        className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-cream-warm"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-5 text-center">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.slug, i.qty + 1)}
                        className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-cream-warm"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => remove(i.slug)}
                        className="ml-auto text-xs uppercase tracking-[0.18em] text-terracotta-deep/70 hover:text-terracotta-deep"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border px-6 py-5 space-y-4 bg-cream-warm">
          <div className="flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.22em] text-ink/60">
              Subtotal
            </span>
            <span className="font-display text-2xl text-terracotta-deep">
              ₹{total.toLocaleString("en-IN")}
            </span>
          </div>
          <a
            href={`https://wa.me/918240633170?text=${message}`}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (items.length === 0) e.preventDefault();
            }}
            aria-disabled={items.length === 0}
            className={`block w-full text-center px-6 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-colors ${
              items.length === 0
                ? "bg-ink/20 text-cream/70 cursor-not-allowed"
                : "bg-terracotta-deep text-cream hover:bg-terracotta"
            }`}
          >
            Checkout via WhatsApp
          </a>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="block w-full text-center text-xs uppercase tracking-[0.18em] text-ink/50 hover:text-terracotta-deep"
            >
              Empty basket
            </button>
          )}
          <p className="text-[11px] text-ink/55 text-center leading-relaxed">
            A small house — we confirm every order personally on WhatsApp before
            dispatch.
          </p>
        </footer>
      </aside>
    </>
  );
}
