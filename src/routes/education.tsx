import { createFileRoute } from "@tanstack/react-router";
import { Page, SectionHeading } from "@/components/site";
import { education } from "@/data/portfolio";

const T = "Education — Rahber Islam";
const D = "MCA at Lovely Professional University, B.Sc. Mathematics from Patliputra University.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Education,
});

function Education() {
  return (
    <Page>
      <SectionHeading title="education" />
      <ol className="relative mt-12 ml-2 border-l border-muted-foreground/60">
        {education.map((e, i) => (
          <li key={e.degree} className="page-in relative mb-10 pl-8" style={{ animationDelay: `${i * 120}ms` }}>
            <span className="absolute -left-[7px] top-2 h-3 w-3 bg-primary" />
            <div className="border border-muted-foreground p-5 transition-colors hover:border-primary">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-medium">{e.degree}</h2>
                <span className="text-sm text-primary">{e.period}</span>
              </div>
              <p className="mt-1 text-muted-foreground">{e.school}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <span className="border border-muted-foreground/60 px-2 py-1 text-muted-foreground">{e.location}</span>
                <span className="border border-primary px-2 py-1">{e.result}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}
