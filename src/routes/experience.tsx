import { createFileRoute } from "@tanstack/react-router";
import { Page, SectionHeading } from "@/components/site";
import { experience } from "@/data/portfolio";

const T = "Experience — Rahber Islam";
const D = "Deloitte data analytics job simulation and Data Science with Python training.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <Page>
      <SectionHeading title="experience" />
      <ol className="relative mt-12 ml-2 border-l border-muted-foreground/60">
        {experience.map((x, i) => (
          <li key={x.org} className="page-in relative mb-10 pl-8" style={{ animationDelay: `${i * 150}ms` }}>
            <span className="absolute -left-[7px] top-2 h-3 w-3 bg-primary" />
            <div className="border border-muted-foreground transition-colors hover:border-primary">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-muted-foreground p-5">
                <div>
                  <h2 className="text-lg font-medium">{x.org}</h2>
                  <p className="text-sm text-muted-foreground">{x.role}</p>
                </div>
                <span className="text-sm text-primary">{x.period}</span>
              </div>
              <ul className="space-y-2 p-5 text-sm text-muted-foreground">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-3"><span className="text-primary">▹</span>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
