import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { Page, SectionHeading, Btn } from "@/components/site";
import { projects } from "@/data/portfolio";

const T = "Projects — Rahber Islam";
const D = "Machine-learning and analytics projects: dementia detection, AI proctoring and an EV charging finder.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Page>
      <SectionHeading title="projects" />
      <p className="mt-4 text-muted-foreground">List of my projects</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="page-in group flex flex-col border border-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="relative flex h-32 items-center justify-center overflow-hidden border-b border-muted-foreground">
              <div className="dots absolute inset-0 opacity-20" />
              <span className="relative border border-primary px-3 py-1 text-sm text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {p.highlight}
              </span>
            </div>
            <p className="flex flex-wrap gap-x-2 border-b border-muted-foreground px-3 py-2 text-xs text-muted-foreground">
              {p.tech.map((t) => <span key={t}>{t}</span>)}
            </p>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs text-primary">{p.period}</p>
              <h2 className="mt-1 text-lg font-medium">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-4 space-y-1 text-xs text-muted-foreground">
                {p.features.map((f) => <li key={f}><span className="text-primary">▹</span> {f}</li>)}
              </ul>
              <div className="mt-auto pt-5">
                <Btn href={p.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</Btn>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}
