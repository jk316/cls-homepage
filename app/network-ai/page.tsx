import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NetworkAIPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <ScrollReveal>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm text-secondary hover:text-primary-600"
              >
                <ArrowLeft className="h-4 w-4" />
                返回首页
              </Link>
            </ScrollReveal>

            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                网络数字孪生 & 网络AI
              </h2>
            </div>

            {/* Description */}
            <ScrollReveal>
              <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
                <p className="text-secondary">
                  网络数字孪生（Network Digital Twin）是一种基于数据驱动的方法，通过构建物理网络的虚拟副本，
                  实现网络性能的精确建模、仿真和优化。结合大模型技术，可以实现：
                </p>
                <ul className="mt-4 space-y-2 text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    网络流量理解与预测
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    异常检测与故障诊断
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    资源分配优化
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                    智能网络管理
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Video Demo */}
            <ScrollReveal delay={100}>
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-medium text-primary-900">
                  系统演示
                </h3>
                <div className="rounded-xl bg-secondary-900 p-2">
                  <video
                    className="w-full rounded-lg"
                    controls
                    muted
                    autoPlay
                    loop
                    playsInline
                    src="/movies/网络AI.mp4"
                  >
                    您的浏览器不支持视频标签。
                  </video>
                </div>
                <p className="mt-2 text-sm text-secondary">
                  NPE (Network Performance Evaluation) 系统演示 - 利用可测量指标评估难以测量的网络性能
                </p>
              </div>
            </ScrollReveal>

            {/* Related Papers */}
            <ScrollReveal delay={200}>
              <div>
                <h3 className="mb-4 text-lg font-medium text-primary-900">
                  相关论文
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm">
                      <span className="font-medium text-primary-900">
                        Yong Cui, Jiangchuan Liu, Minlan Yu, Junchen Jiang, Liang Zhang, Lu Lu
                      </span>
                      .{" "}
                      <span className="font-medium text-secondary">Network Digital Twin</span>
                      .{" "}
                      <span className="italic text-primary-600">IEEE Netw.</span>, 2024
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm">
                      <span className="font-medium text-primary-900">
                        Linbo Hui, Mowei Wang, Liang Zhang, Lu Lu, Yong Cui
                      </span>
                      .{" "}
                      <span className="font-medium text-secondary">
                        Digital Twin for Networking: A Data-driven Performance Modeling Perspective
                      </span>
                      .{" "}
                      <span className="italic text-primary-600">IEEE Network</span>, 2023
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm">
                    <p className="text-sm">
                      <span className="font-medium text-primary-900">
                        Sijiang Huang, Yunze Wei, Lingfeng Peng, Mowei Wang, Linbo Hui, Peng Liu, Zongpeng Du, Zhenhua Liu, Yong Cui
                      </span>
                      .{" "}
                      <span className="font-medium text-secondary">xNet: Modeling Network Performance With Graph Neural Networks</span>
                      .{" "}
                      <span className="italic text-primary-600">IEEE/ACM Trans. Netw.</span>, 2024
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
