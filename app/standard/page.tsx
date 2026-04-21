import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Standards } from "@/components/sections/Standards";

export default function StandardPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Standards />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
