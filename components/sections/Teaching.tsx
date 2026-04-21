import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { LazyImage } from "@/components/ui/LazyImage";
import teachingData from "@/content/teaching.json";

export function Teaching() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Teaching Honors */}
        <div className="mb-12">
          <h2 className="mb-6 font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            教学工作
          </h2>

          <div className="mb-8">
            <h3 className="mb-4 text-lg font-medium text-secondary">课程荣誉</h3>
            <div className="space-y-3">
              {teachingData.honors.map((honor, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 rounded-lg bg-accent-50/50 p-4">
                    <Badge variant="accent">{honor.year}</Badge>
                    <p className="text-sm text-secondary">{honor.title}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Textbooks */}
        <div className="mb-12">
          <h3 className="mb-6 text-lg font-medium text-secondary">教材出版</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teachingData.textbooks.map((book, index) => (
              <ScrollReveal key={index} delay={index * 75}>
                <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-[3/4] overflow-hidden">
                    <LazyImage
                      src={book.cover}
                      alt={book.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-primary-900">
                      {book.title}
                    </h4>
                    <p className="mt-1 text-xs text-secondary line-clamp-2">
                      {book.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Teaching Papers */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-secondary">教研论文</h3>
          <div className="space-y-2 rounded-xl bg-white p-6 shadow-sm">
            {teachingData.papers.map((paper, index) => (
              <p key={index} className="text-sm text-secondary">
                {paper}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
