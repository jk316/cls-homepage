import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import publicationsData from "@/content/publications.json";

export function Publications() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            学术论文
          </h2>
          <p className="mt-2 text-secondary">
            在互联网领域顶级会议和期刊发表学术论文 100+ 篇
          </p>
        </div>

        <div className="space-y-8">
          {publicationsData.map((yearGroup, groupIndex) => (
            <ScrollReveal key={yearGroup.year} delay={groupIndex * 100}>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Badge variant="primary" className="text-base">
                    {yearGroup.year}
                  </Badge>
                  <span className="text-sm text-secondary">
                    {yearGroup.papers.length} 篇论文
                  </span>
                </div>

                <div className="space-y-3">
                  {yearGroup.papers.map((paper, paperIndex) => (
                    <div
                      key={paperIndex}
                      className="rounded-md p-3 transition-colors hover:bg-secondary-50"
                    >
                      <p className="text-sm leading-relaxed">
                        <span className="font-medium text-primary-900">
                          {paper.authors}
                        </span>
                        .{" "}
                        <span className="font-medium text-secondary">
                          {paper.title}
                        </span>
                        .{" "}
                        <span className="italic text-primary-600">
                          {paper.venue}
                        </span>
                        {'volume' in paper && paper.volume && `, ${paper.volume}`}
                        {'pages' in paper && paper.pages && `, ${paper.pages}`}
                        {'date' in paper && paper.date && `, ${paper.date}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-secondary">
            ... 共 100+ 篇学术论文，覆盖 2003-2024 年
          </p>
        </div>
      </div>
    </section>
  );
}
