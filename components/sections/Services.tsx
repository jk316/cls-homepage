import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";
import servicesData from "@/content/services.json";

export function Services() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
            学术兼职
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                <p className="text-sm leading-relaxed text-secondary">
                  {service}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
