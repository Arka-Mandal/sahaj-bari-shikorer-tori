import logoAsset from "@/assets/sahaj-bari-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/85 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-display text-2xl text-cream">Sahaj Bari</div>
              <div className="font-bangla text-xs text-cream/60">
                সহজ বাড়ি · From Soil to Soul
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/70 max-w-xs">
            An indigenous lifestyle house — heartcrafted by Bengali communities,
            rooted in the verandahs of North Kolkata.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-mustard mb-4">
            Wander
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#story" className="hover:text-mustard">Our Story</a></li>
            <li><a href="#craft" className="hover:text-mustard">The Craft</a></li>
            <li><a href="#journal" className="hover:text-mustard">Journal</a></li>
            <li><a href="#visit" className="hover:text-mustard">Visit Us</a></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-mustard mb-4">
            Whisper to us
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://wa.me/918240633170"
                target="_blank"
                rel="noreferrer"
                className="hover:text-mustard"
              >
                WhatsApp · +91 8240 633 170
              </a>
            </li>
            <li>North Kolkata, Bharat</li>
            <li className="font-bangla text-base text-cream/80 pt-2">
              "দেশজ শিকড়, সহজে বাঁচার গল্প।"
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between text-xs text-cream/50 gap-2">
          <span>© {new Date().getFullYear()} Sahaj Bari · Heartcrafted in Bharat</span>
          <span className="font-bangla">ভালোবেসে বানানো</span>
        </div>
      </div>
    </footer>
  );
}
