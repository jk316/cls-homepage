import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Awards } from "@/components/sections/Awards";

export default function AwardPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Awards />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
