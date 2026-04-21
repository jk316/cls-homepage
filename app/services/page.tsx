import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Services />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
