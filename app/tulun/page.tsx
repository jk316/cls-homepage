import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { LazyImage } from "@/components/ui/LazyImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookOpen, Download } from "lucide-react";

const textbooks = [
  { title: "图论", cover: "/images/graph-theory.jpg", desc: "教材配套资源" },
  { title: "移动互联网", cover: "/images/mobile-internet.jpg", desc: "十三五国家重点出版物出版规划项目" },
  { title: "视界", cover: "/images/vision-cover.png", desc: "互联网+时代的创新和创业" },
  { title: "下一代互联网与IPv6过渡", cover: "/images/ipv6-transition.jpg", desc: "技术专著" },
  { title: "计算机网络实验教程", cover: "/images/network-experiment.jpg", desc: "北京高等教育精品教材" },
];

export default function TulunPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                图论教材
              </h2>
              <p className="mt-2 text-secondary">
                点击下载配套资源
              </p>
            </div>

            {/* Download Section */}
            <ScrollReveal>
              <div className="mb-8 flex items-center gap-4 rounded-xl bg-primary-50 p-4">
                <Download className="h-8 w-8 text-primary-600" />
                <div className="flex-1">
                  <p className="font-medium text-primary-900">图论教材资源下载</p>
                  <p className="text-sm text-secondary">点击下载配套资料</p>
                </div>
                <a
                  href="https://cloud.tsinghua.edu.cn/f/4379a2bac7f84bd19149/?dl=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
                >
                  下载
                </a>
              </div>
            </ScrollReveal>

            {/* Textbooks Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {textbooks.map((book, index) => (
                <ScrollReveal key={index} delay={index * 75}>
                  <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg">
                    <div className="aspect-[3/4] overflow-hidden">
                      <LazyImage
                        src={book.cover}
                        alt={book.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-primary-900">{book.title}</h3>
                      <p className="mt-1 text-xs text-secondary line-clamp-2">
                        {book.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
