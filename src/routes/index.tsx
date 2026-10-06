import { createFileRoute, Link } from "@tanstack/react-router";
import { Dots } from "@/components/site";

const T = "Rahber Islam — Data Analyst | Data Science & ML";
const D = "Data Analyst skilled in Python, SQL and Power BI with three published machine-learning projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const strengths = ["EDA", "Data Cleaning", "Statistical Analysis", "Dashboard Development", "Machine Learning", "Data Storytelling"];
const bars = [38, 62, 48, 80, 56, 92, 70];

function Home() {
  return (
    <main className="page-in mx-auto max-w-6xl px-5">
      <section className="grid min-h-[78vh] items-center gap-14 py-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold leading-snug sm:text-4xl">
            Rahber Islam is a <span className="text-primary">Data Analyst</span> and{" "}
            <span className="text-primary">Data Science &amp; Machine Learning</span> enthusiast
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Hands-on experience in Python, SQL and Power BI, backed by three published machine-learning projects covering
            healthcare prediction, computer vision and full-stack analytics applications.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {strengths.map((s) => (
              <li key={s} className="border border-muted-foreground/50 px-2 py-1 text-xs text-muted-foreground">{s}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects" className="border border-primary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/15">View Projects =&gt;</Link>
            <Link to="/contact" className="border border-muted-foreground px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">Contact Me</Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute -left-6 top-6 h-24 w-24 border border-primary" />
          <div aria-hidden className="absolute -left-2 top-16 h-16 w-16 border border-primary" />
          <Dots className="-right-2 top-24 h-20 w-20" />
          <div className="relative ml-8 border border-muted-foreground bg-background p-5">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>insights.ipynb</span>
              <span className="flex gap-1"><i className="h-2 w-2 bg-primary" /><i className="h-2 w-2 border border-muted-foreground" /><i className="h-2 w-2 border border-muted-foreground" /></span>
            </div>
            <pre className="mt-4 overflow-hidden text-xs leading-6 text-muted-foreground">
<span className="text-primary">import</span> pandas <span className="text-primary">as</span> pd{"\n"}df = pd.read_sql(query, conn){"\n"}df.<span className="text-foreground">describe</span>()
            </pre>
            <div className="mt-5 flex h-36 items-end gap-2 border-b border-l border-muted-foreground/60 px-2">
              {bars.map((h, i) => (
                <div key={i} className={`flex-1 transition-all duration-700 hover:opacity-70 ${i === 5 ? "bg-primary" : "border border-primary/70"}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {[["92%", "accuracy"], ["3", "ML projects"], ["SQL", "+ Power BI"]].map(([a, b]) => (
                <div key={b} className="border border-muted-foreground/50 py-2">
                  <p className="font-semibold text-primary">{a}</p>
                  <p className="text-[10px] text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative ml-8 flex items-center gap-3 border border-t-0 border-muted-foreground px-3 py-2 text-xs text-muted-foreground">
            <span className="h-3 w-3 bg-primary" /> Currently working on <span className="font-semibold text-foreground">Dementia Detection AI</span>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-10">
        <div className="relative">
          <blockquote className="border border-muted-foreground px-6 py-6 text-lg sm:text-xl">
            <span className="absolute -top-4 left-3 bg-background px-2 text-3xl text-muted-foreground">“</span>
            Without data, you're just another person with an opinion.
          </blockquote>
          <p className="ml-auto w-fit border border-t-0 border-muted-foreground px-4 py-3">- W. Edwards Deming</p>
        </div>
      </section>
    </main>
  );
}
