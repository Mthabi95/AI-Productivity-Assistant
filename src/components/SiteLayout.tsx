import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Heart, Scissors } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Hairstyles Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-11 w-11 place-items-center rounded-full border-4 border-lavender bg-card text-secondary">
        <Scissors className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="font-display text-xl font-bold text-primary">Tiny</span>
        <span className="font-display text-xl font-bold text-secondary">Tresses</span>
        <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Salon</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-semibold text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
            <Link to="/book" className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-soft hover:opacity-90">Book Now</Link>
          </nav>
          <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-3 border-t border-border px-5 py-4 lg:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-semibold">{n.label}</Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-2 text-center font-bold text-primary-foreground">Book Now</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="mt-24 bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-10 text-center">
          <Logo />
          <p className="flex items-center gap-1 font-display text-lg text-lavender">
            Little Kids <Heart className="h-4 w-4 fill-primary text-primary" /> Big Styles
          </p>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} TinyTresses Salon. Images are illustrative, not actual salon clients.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-hero px-5 pb-10 pt-16 text-center">
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{sub}</p>}
    </section>
  );
}
