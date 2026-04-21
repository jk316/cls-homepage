import { ScrollReveal } from "@/components/ui/ScrollReveal";
import awardsData from "@/content/awards.json";

export function Awards() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            个人荣誉与获奖列表
          </h2>
        </div>

        <div className="space-y-4">
          {awardsData.map((award, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="flex flex-col gap-2 rounded-lg border-l-4 border-accent-500 bg-white p-4 shadow-sm transition-all hover:bg-accent-50/50 sm:flex-row sm:items-start sm:gap-4">
                <span className="shrink-0 font-mono text-sm font-semibold text-accent-600 sm:min-w-[48px]">
                  {award.year}
                </span>
                <div className="flex-1">
                  <p className="text-secondary">{award.title}</p>
                  {award.rank && (
                    <span className="mt-1 inline-block text-xs text-accent-600">
                      {award.rank}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
