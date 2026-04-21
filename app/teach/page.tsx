import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Teaching } from "@/components/sections/Teaching";

export default function TeachPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Teaching />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
