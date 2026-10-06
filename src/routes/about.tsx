import { createFileRoute } from "@tanstack/react-router";
import { Page, SectionHeading, Dots } from "@/components/site";
import { skills, certifications } from "@/data/portfolio";

const T = "About Rahber Islam — Skills & Certifications";
const D = "Data analyst turning raw data into decision-ready insights with Python, SQL, Power BI and machine learning.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Page>
      <SectionHeading title="about-me" />
      <div className="relative mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p className="text-foreground">Hello, I'm Rahber!</p>
          <p>
            I'm a Data Analyst with hands-on experience in <span className="text-foreground">Python, SQL and Power BI</span>, backed by
            three published machine-learning projects covering healthcare prediction, computer vision and full-stack analytics applications.
          </p>
          <p>
            I turn raw data into decision-ready insights through exploratory data analysis, data cleaning and statistical analysis,
            and build dashboards that make trends easy to act on.
          </p>
          <p>
            I enjoy solving business problems with data and telling the story behind the numbers, communicating findings clearly to
            non-technical stakeholders.
          </p>
        </div>
        <div className="relative hidden min-h-56 lg:block">
          <div className="absolute left-10 top-4 h-28 w-28 border border-muted-foreground" />
          <div className="absolute left-24 top-20 h-24 w-24 border border-primary" />
          <Dots className="right-6 top-0 h-20 w-24" />
          <Dots className="bottom-0 left-0 h-16 w-16" />
        </div>
      </div>

      <div className="mt-20"><SectionHeading title="skills" /></div>
      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {skills.map((g) => (
          <div key={g.title} className="mb-4 break-inside-avoid border border-muted-foreground transition-colors hover:border-primary">
            <p className="border-b border-muted-foreground px-3 py-2 text-sm font-semibold">{g.title}</p>
            <p className="flex flex-wrap gap-x-3 gap-y-1 p-3 text-sm text-muted-foreground">
              {g.items.map((s) => <span key={s}>{s}</span>)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20"><SectionHeading title="certifications" /></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.name} className="border border-muted-foreground p-5 transition-transform hover:-translate-y-1 hover:border-primary">
            <p className="text-xs text-primary">{c.date}</p>
            <p className="mt-2 text-lg font-medium">{c.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
