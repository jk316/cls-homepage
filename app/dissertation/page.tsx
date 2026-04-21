import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Publications } from "@/components/sections/Publications";

export default function DissertationPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Publications />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
