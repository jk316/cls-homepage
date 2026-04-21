import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { ResearchAreas } from "@/components/sections/ResearchAreas";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Hero />
        <ResearchAreas />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
