import { Mail, MapPin, Trophy, Globe } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-secondary-50 to-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Avatar */}
          <ScrollReveal direction="left" className="flex justify-center lg:col-span-1">
            <div className="relative">
              <div className="aspect-square w-48 overflow-hidden rounded-2xl bg-secondary-100 shadow-lg ring-4 ring-white md:w-64">
                <img
                  src="/images/cuiyong.jpg"
                  alt="崔勇教授"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary-200/50 blur-2xl" />
              <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-secondary-200/50 blur-xl" />
            </div>
          </ScrollReveal>

          {/* Info */}
          <div className="lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
            <ScrollReveal direction="right" delay={100}>
              <div className="text-center lg:text-left">
                <h1 className="font-serif text-4xl font-bold text-primary-900 md:text-5xl lg:text-6xl">
                  崔勇
                </h1>
                <p className="mt-2 text-lg text-secondary md:text-xl">
                  清华大学长聘教授 · 网络所所长
                </p>
                <p className="mt-1 text-base text-accent-600">
                  教育部长江学者特聘教授 · 首届青年长江学者
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
                  <span>清华大学自强科技楼1号楼11层1112室</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <div className="mt-6 rounded-xl border border-secondary-200 bg-white p-4 text-sm text-secondary shadow-sm">
                <p>
                  获国家科技进步一等奖1次、国家科技进步二等奖1次、国家技术发明二等奖1次，多次获得国家信息产业重大技术发明。参与研制成功我国第一台&ldquo;IPv6核心路由器&rdquo;，参与建设了中国下一代互联网示范工程CNGI-CERNET2。在Mobicom、NSDI、ToN等互联网领域顶级会议和期刊上发表了大量学术论文，担任中国互联网协会学术工作委员会秘书长，CCF
                  A类期刊TPDS等4个IEEE期刊编委。
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal direction="right" delay={400}>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-lg bg-primary-50 p-3 text-center">
                  <Trophy className="mx-auto h-5 w-5 text-primary-600" />
                  <p className="mt-1 text-xs text-secondary">国家科技进步一等奖</p>
                </div>
                <div className="rounded-lg bg-secondary-50 p-3 text-center">
                  <Globe className="mx-auto h-5 w-5 text-secondary-600" />
                  <p className="mt-1 text-xs text-secondary">10+ RFC标准</p>
                </div>
                <div className="rounded-lg bg-accent-50 p-3 text-center">
                  <p className="text-xl font-bold text-accent-600">100+</p>
                  <p className="text-xs text-secondary">学术论文</p>
                </div>
                <div className="rounded-lg bg-primary-50 p-3 text-center">
                  <p className="text-xl font-bold text-primary-600">20+</p>
                  <p className="text-xs text-secondary">年科研经历</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
