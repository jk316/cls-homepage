import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { FileText, Globe, Briefcase } from "lucide-react";
import standardsData from "@/content/standards.json";

export function Standards() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            技术标准
          </h2>
        </div>

        {/* RFC Standards */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-medium text-primary-900">RFC 国际标准</h3>
            <Badge variant="primary">{standardsData.rfc.length} 项</Badge>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {standardsData.rfc.map((rfc, index) => (
                <ScrollReveal key={index} delay={index * 30}>
                  <a
                    href={`https://datatracker.ietf.org/doc/rfc${rfc.code.replace("RFC", "")}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-secondary-200 p-3 transition-all hover:border-primary-300 hover:bg-primary-50/50"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary-600" />
                      <span className="font-mono text-sm font-medium text-primary-700 group-hover:underline">
                        {rfc.code}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-secondary line-clamp-1">
                      {rfc.title}
                    </p>
                    <p className="mt-1 text-xs text-tertiary">{rfc.date}</p>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* National Standards */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="accent">国家标准</Badge>
          </div>
          <div className="space-y-3">
            {standardsData.national.map((standard, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="rounded-lg border-l-4 border-accent-400 bg-white p-4">
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-sm font-medium text-accent-600">
                      {standard.code}
                    </span>
                    <span className="text-sm text-secondary">{standard.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-tertiary">{standard.date}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Industry Standards */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-secondary-600" />
            <h3 className="text-lg font-medium text-primary-900">中国通信行业标准</h3>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="space-y-3">
              {standardsData.industry.map((standard, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 rounded-lg bg-secondary-50 p-3">
                    <span className="font-mono text-sm font-medium text-secondary-700">
                      {standard.code}
                    </span>
                    <p className="text-sm text-secondary">{standard.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
