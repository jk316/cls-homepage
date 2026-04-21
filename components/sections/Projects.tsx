import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Calendar, User } from "lucide-react";
import projectsData from "@/content/projects.json";

export function Projects() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            科研项目
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 50}
              className={index % 2 === 1 ? "md:translate-y-8" : ""}
            >
              <div className="rounded-xl border border-secondary-200 bg-white p-5 transition-all hover:border-primary-200 hover:shadow-md">
                <h3 className="font-medium text-primary-900">
                  {project.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <Badge variant="outline">{project.role}</Badge>
                </div>

                <div className="mt-3 flex items-center gap-4 text-sm text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
