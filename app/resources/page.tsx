import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink } from "lucide-react";

const conferences = [
  { name: "MOBICOM", url: "http://www.sigmobile.org/mobicom/" },
  { name: "SIGCOMM", url: "http://www.sigcomm.org/" },
  { name: "INFOCOM", url: "http://www.ieee-infocom.org/" },
  { name: "SIGMETRICS", url: "http://www.sigmetrics.org/" },
  { name: "MOBIHOC", url: "http://www.sigmobile.org/mobihoc/" },
  { name: "ICNP", url: "http://www.ieee-icnp.org/" },
  { name: "OSDI", url: "http://www.informatik.uni-trier.de/~ley/db/conf/osdi/" },
  { name: "NSDI", url: "https://www.usenix.org/nsdi/" },
  { name: "MOBISYS", url: "http://www.sigmobile.org/mobisys/" },
  { name: "SenSys", url: "http://www.sigmobile.org/sensys/" },
  { name: "NDSS", url: "https://www.isoc.org/isoc/conferences/ndss/" },
  { name: "CCS", url: "http://www.sigsac.org/ccs.html" },
];

const journals = [
  "IEEE Communications Magazine",
  "IEEE Network",
  "IEEE Journal on Selected Areas in Communications (JSAC)",
  "IEEE/ACM Transactions on Networking",
  "IEEE Transactions on Mobile Computing",
  "IEEE Transactions on Parallel and Distributed Systems",
  "IEEE Internet Computing",
  "IEEE Communications Letters",
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen pb-20 lg:pb-0">
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-primary-900 md:text-4xl">
                相关学术资源
              </h2>
            </div>

            {/* Conferences */}
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-primary-900">
                TOP CONFERENCES
              </h3>
              <ScrollReveal>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {conferences.map((conf, index) => (
                    <a
                      key={index}
                      href={conf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-lg border border-secondary-200 bg-white p-3 transition-all hover:border-primary-300 hover:bg-primary-50/50"
                    >
                      <span className="font-medium text-primary-700">{conf.name}</span>
                      <ExternalLink className="h-4 w-4 text-secondary" />
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Journals */}
            <div>
              <h3 className="mb-4 text-lg font-medium text-primary-900">
                IEEE Journals & Magazines
              </h3>
              <ScrollReveal>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <ul className="space-y-2">
                    {journals.map((journal, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                        {journal}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
