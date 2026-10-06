import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const nav = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/education", label: "education" },
  { to: "/experience", label: "experience" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-bold text-foreground">
      <span className="grid grid-cols-2 gap-[2px]">
        <span className="h-2 w-2 bg-primary" />
        <span className="h-2 w-2 border border-foreground" />
        <span className="h-2 w-2 border border-foreground" />
        <span className="h-2 w-2 bg-foreground" />
      </span>
      Rahber
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <nav className="hidden gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-foreground"
            >
              <span className="text-primary">#</span>
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="relative h-6 w-7 md:hidden"
        >
          <span className={`absolute left-0 h-0.5 w-7 bg-foreground transition-all ${open ? "top-3 rotate-45" : "top-1"}`} />
          <span className={`absolute left-0 top-3 h-0.5 bg-foreground transition-all ${open ? "w-0" : "w-5"}`} />
          <span className={`absolute left-0 h-0.5 w-7 bg-foreground transition-all ${open ? "top-3 -rotate-45" : "top-5"}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-96 border-b" : "max-h-0"}`}>
        <nav className="flex flex-col gap-4 px-5 pb-6 text-2xl">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              className="text-muted-foreground data-[status=active]:text-foreground"
            >
              <span className="text-primary">#</span>
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    { href: profile.github, Icon: Github, label: "GitHub" },
    { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
  ];
  return (
    <div className={`flex gap-4 ${className}`}>
      {items.map(({ href, Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-muted-foreground transition-colors hover:text-primary">
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-muted-foreground/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-4"><Logo /><span className="text-sm text-muted-foreground">{profile.email}</span></div>
          <p className="mt-3 text-sm">{profile.title}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">
              <span className="text-primary">#</span>{n.label}
            </Link>
          ))}
        </nav>
        <div className="md:justify-self-end">
          <p className="mb-3 text-xl">Media</p>
          <SocialLinks />
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-muted-foreground">© 2026 Rahber Islam. All rights reserved.</p>
    </footer>
  );
}

export function SideMedia() {
  return (
    <div className="fixed left-4 top-0 z-30 hidden flex-col items-center gap-3 xl:flex">
      <span className="h-48 w-px bg-muted-foreground" />
      <SocialLinks className="flex-col" />
    </div>
  );
}

export function SectionHeading({ title, line = true }: { title: string; line?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-3xl font-medium sm:text-4xl">
        <span className="text-primary">#</span>{title}
      </h1>
      {line && <span className="h-px max-w-md flex-1 bg-primary" />}
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <main className="page-in mx-auto max-w-6xl px-5 pt-10">{children}</main>;
}

export function Btn({ children, variant = "primary", ...props }: { children: ReactNode; variant?: "primary" | "ghost" } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls =
    variant === "primary"
      ? "border-primary text-foreground hover:bg-primary/15"
      : "border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground";
  return (
    <a {...props} className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors ${cls} ${props.className ?? ""}`}>
      {children}
    </a>
  );
}

export function Dots({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`dots drift pointer-events-none absolute ${className}`} />;
}
