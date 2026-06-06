import { useEffect, useState } from "react";

const PHONE = "918240633170";
const MESSAGE = encodeURIComponent(
  "Namaskar Sahaj Bari! I'd like to book / enquire about your handmade collection 🌱"
);

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className={`fixed z-50 bottom-5 right-5 md:bottom-7 md:right-7 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white shadow-warm animate-float-soft hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.74.34c-.25.27-.97.95-.97 2.31s.99 2.68 1.13 2.87c.13.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.27.18 1.75.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.18.16-1.29-.06-.11-.24-.18-.51-.31zM16.03 5.33c-5.86 0-10.62 4.76-10.62 10.62 0 1.87.49 3.7 1.42 5.31L5 27l5.93-1.81a10.6 10.6 0 0 0 5.1 1.3c5.86 0 10.62-4.76 10.62-10.62 0-5.86-4.76-10.62-10.62-10.62zm0 19.43a8.8 8.8 0 0 1-4.49-1.23l-.32-.19-3.51 1.07 1.09-3.42-.21-.34a8.81 8.81 0 0 1-1.36-4.7c0-4.87 3.96-8.82 8.83-8.82s8.82 3.95 8.82 8.82-3.96 8.81-8.83 8.81z" />
        </svg>
        <span className="hidden sm:flex flex-col leading-tight pr-1">
          <span className="text-[11px] uppercase tracking-[0.18em] opacity-90">
            Book on
          </span>
          <span className="text-sm font-medium -mt-0.5">WhatsApp</span>
        </span>
      </span>
    </a>
  );
}
