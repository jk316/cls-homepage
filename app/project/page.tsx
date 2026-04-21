import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { Projects } from "@/components/sections/Projects";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <Projects />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
