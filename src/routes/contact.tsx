import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Plane, Github, Linkedin } from "lucide-react";
import { Page, SectionHeading } from "@/components/site";
import { profile } from "@/data/portfolio";

const T = "Contact Rahber Islam";
const D = "Get in touch about data analytics, data science and machine learning opportunities.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

type Fields = { name: string; email: string; subject: string; message: string };
const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(f: Fields) {
  const e: Partial<Fields> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email";
  if (f.subject.trim().length < 3) e.subject = "Please add a subject";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters";
  return e;
}

function Contact() {
  const [f, setF] = useState<Fields>(empty);
  const [err, setErr] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErr(e);
    if (Object.keys(e).length) return;
    // No email service connected yet: open the visitor's mail app with the message prefilled.
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${body}`;
    setSent(true);
    setF(empty);
  };

  const field = (k: keyof Fields, label: string, textarea = false) => (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea rows={5} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className="mt-1 w-full border border-muted-foreground bg-transparent p-3 text-sm outline-none focus:border-primary" />
      ) : (
        <input type={k === "email" ? "email" : "text"} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className="mt-1 w-full border border-muted-foreground bg-transparent p-3 text-sm outline-none focus:border-primary" />
      )}
      {err[k] && <span className="mt-1 block text-xs text-destructive">{err[k]}</span>}
    </label>
  );

  const info = [
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, text: profile.location },
    { Icon: Plane, text: profile.availability },
    { Icon: Linkedin, text: "in/islam-rahber", href: profile.linkedin },
    { Icon: Github, text: "rahberislam0001-sketch", href: profile.github },
  ];

  return (
    <Page>
      <SectionHeading title="contacts" />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="leading-relaxed text-muted-foreground">
            I'm open to Data Analytics, Data Science and Machine Learning opportunities, as well as collaborations and relevant
            professional projects. If you have a request or question, don't hesitate to reach out.
          </p>
          <div className="mt-8 border border-muted-foreground p-5">
            <p className="mb-4 font-semibold">Message me here</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {info.map(({ Icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 break-all">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  {href ? <a href={href} target="_blank" rel="noreferrer" className="hover:text-foreground">{text}</a> : text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="space-y-4 border border-muted-foreground p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {field("name", "Name")}
            {field("email", "Email")}
          </div>
          {field("subject", "Subject")}
          {field("message", "Message", true)}
          <button type="submit" className="border border-primary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-primary/15">
            Send Message
          </button>
          {sent && <p className="text-sm text-primary">Thanks! Your mail app should open with the message ready to send.</p>}
        </form>
      </div>
    </Page>
  );
}
