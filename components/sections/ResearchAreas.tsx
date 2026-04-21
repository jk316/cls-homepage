import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const researchAreas = [
  {
    id: "network-ai",
    title: "网络数字孪生 & 网络AI",
    description:
      "面向网络大模型应用，基于预训练模型技术探索网络流量建模与智能优化新范式：通过大模型实现网络流量理解、异常检测与资源分配优化，推动网络管理从规则驱动向智能驱动转型。",
    icon: "🤖",
    href: "/network-ai",
    color: "from-primary-500 to-secondary-500",
  },
  {
    id: "low-latency",
    title: "低时延传输技术",
    description:
      "面向新型应用在融合网络场景下的互联互通以及实时高效的数据传输需求，研究新型的融合网络传输协议以及关键技术，为新型的时延敏感型应用业务提供网络传输支撑。",
    icon: "⚡",
    href: "#",
    color: "from-secondary-500 to-primary-500",
  },
  {
    id: "security",
    title: "网络安全",
    description:
      "面向抗DDoS攻击，基于大模型技术探索智能防御与资源优化新范式：构建高效精准的流量异常检测模型和攻击溯源框架，实现对大规模DDoS攻击的主动防御与资源弹性调度。",
    icon: "🛡️",
    href: "#",
    color: "from-accent-500 to-primary-500",
  },
  {
    id: "streaming",
    title: "流媒体传输",
    description:
      "针对视频传输场景，构建更为准确的用户体验模型，并基于此做多维感知的视频传输优化，最终提升用户视频观看体验。",
    icon: "📹",
    href: "#",
    color: "from-primary-500 to-accent-500",
  },
];

export function ResearchAreas() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
              研究方向
            </h2>
            <p className="mt-2 text-secondary">
              StarLab 下一代互联网技术研究组
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <ScrollReveal key={area.id} delay={index * 100}>
              <a
                href={area.href}
                className="group block"
              >
                <Card className="h-full cursor-pointer overflow-hidden border-l-4 border-l-transparent transition-all duration-200 hover:border-l-primary-500 hover:shadow-lg">
                  {/* Gradient top bar */}
                  <div className={`h-1 bg-gradient-to-r ${area.color}`} />

                  <CardHeader className="flex flex-row items-center gap-4">
                    <span className="text-4xl">{area.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary-700">
                        {area.title}
                      </CardTitle>
                    </div>
                    <ArrowRight className="h-5 w-5 text-secondary transition-transform group-hover:translate-x-1 group-hover:text-primary-600" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-secondary">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
