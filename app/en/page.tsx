import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, MapPin, Trophy, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const researchAreas = [
  {
    title: "Network Digital Twin & AI",
    description:
      "Exploring network traffic modeling and intelligent optimization paradigms through pre-trained model technology for network applications.",
    icon: "🤖",
    href: "/network-ai",
  },
  {
    title: "Low-Latency Transmission",
    description:
      "Research on novel converged network transmission protocols for real-time and efficient data transmission in integrated network scenarios.",
    icon: "⚡",
    href: "#",
  },
  {
    title: "Network Security",
    description:
      "Exploring intelligent defense and resource optimization paradigms based on large models for DDoS attack mitigation.",
    icon: "🛡️",
    href: "#",
  },
  {
    title: "Streaming Media Transmission",
    description:
      "Building more accurate user experience models for video transmission scenarios with multi-dimensional perceived video transmission optimization.",
    icon: "📹",
    href: "#",
  },
];

export default function EnglishHomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary-50 to-white py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <ScrollReveal direction="left" className="flex justify-center lg:col-span-1">
                <div className="relative">
                  <div className="aspect-square w-48 overflow-hidden rounded-2xl bg-secondary-100 shadow-lg ring-4 ring-white md:w-64">
                    <img
                      src="/images/cuiyong.jpg"
                      alt="Prof. Yong Cui"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary-200/50 blur-2xl" />
                  <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-secondary-200/50 blur-xl" />
                </div>
              </ScrollReveal>

              <div className="lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
                <ScrollReveal direction="right" delay={100}>
                  <div className="text-center lg:text-left">
                    <h1 className="font-serif text-4xl font-bold text-primary-900 md:text-5xl lg:text-6xl">
                      Yong Cui
                    </h1>
                    <p className="mt-2 text-lg text-secondary md:text-xl">
                      Professor, Tsinghua University
                    </p>
                    <p className="mt-1 text-base text-accent-600">
                      Cheung Kong Scholar · Director of Network Research Institute
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200}>
                  <div className="mt-6 space-y-2 text-center lg:text-left">
                    <div className="flex items-center justify-center gap-2 text-secondary lg:justify-start">
                      <Mail className="h-4 w-4" />
                      <a
                        href="mailto:cuiyong@tsinghua.edu.cn"
                        className="hover:text-primary-600"
                      >
                        cuiyong@tsinghua.edu.cn
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-secondary lg:justify-start">
                      <MapPin className="h-4 w-4" />
                      <span>Ziqiang Technology Building, Room 1112</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={300}>
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-primary-50 p-3 text-center">
                      <Trophy className="mx-auto h-5 w-5 text-primary-600" />
                      <p className="mt-1 text-xs text-secondary">National Award</p>
                    </div>
                    <div className="rounded-lg bg-secondary-50 p-3 text-center">
                      <Globe className="mx-auto h-5 w-5 text-secondary-600" />
                      <p className="mt-1 text-xs text-secondary">10+ RFCs</p>
                    </div>
                    <div className="rounded-lg bg-accent-50 p-3 text-center">
                      <p className="text-xl font-bold text-accent-600">100+</p>
                      <p className="text-xs text-secondary">Papers</p>
                    </div>
                    <div className="rounded-lg bg-primary-50 p-3 text-center">
                      <p className="text-xl font-bold text-primary-600">20+</p>
                      <p className="text-xs text-secondary">Years</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                  Research Areas
                </h2>
                <p className="mt-2 text-secondary">
                  StarLab - Smart Internet Architecture Research Group
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-2">
              {researchAreas.map((area, index) => (
                <ScrollReveal key={area.title} delay={index * 100}>
                  <a
                    href={area.href}
                    className="group block"
                  >
                    <div className="h-full rounded-xl border border-secondary-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{area.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-medium text-primary-900 group-hover:text-primary-700">
                            {area.title}
                          </h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-secondary transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-secondary">
                        {area.description}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-secondary-50 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                  Quick Links
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ScrollReveal delay={0}>
                <Link
                  href="/dissertation"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-center transition-all hover:shadow-md"
                >
                  <span className="text-2xl">📚</span>
                  <span className="font-medium text-primary-900">Publications</span>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <Link
                  href="/award"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-center transition-all hover:shadow-md"
                >
                  <span className="text-2xl">🏆</span>
                  <span className="font-medium text-primary-900">Awards</span>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <Link
                  href="/project"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-center transition-all hover:shadow-md"
                >
                  <span className="text-2xl">📊</span>
                  <span className="font-medium text-primary-900">Projects</span>
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link
                  href="/standard"
                  className="flex items-center gap-3 rounded-xl bg-white p-4 text-center transition-all hover:shadow-md"
                >
                  <span className="text-2xl">📋</span>
                  <span className="font-medium text-primary-900">Standards</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
