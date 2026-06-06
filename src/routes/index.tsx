import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Story } from "@/components/Story";
import { CraftGrid } from "@/components/CraftGrid";
import { Journal } from "@/components/Journal";
import { Visit } from "@/components/Visit";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahaj Bari · From Soil to Soul · Indigenous Bengali Lifestyle" },
      {
        name: "description",
        content:
          "Sahaj Bari — a North Kolkata house of indigenous, handmade Bengali lifestyle. Kantha, terracotta, dokra, cane. Heartcrafted by communities. দেশজ শিকড়, সহজে বাঁচার গল্প।",
      },
      { property: "og:title", content: "Sahaj Bari · সহজ বাড়ি" },
      {
        property: "og:description",
        content:
          "Indigenous lifestyle, handmade, heartcrafted by Bengali communities. From soil to soul.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <CraftGrid />
        <Journal />
        <Visit />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
