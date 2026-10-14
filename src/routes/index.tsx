import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, Sparkles as Star, Smile } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { images, services } from "@/lib/salon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TinyTresses Salon — Toddler-Only Hair Salon" },
      { name: "description", content: "Gentle, fun, toddler-friendly haircuts, braids, puffs and natural hair styling. Little Kids ♥ Big Styles." },
      { property: "og:title", content: "TinyTresses Salon — Little Heads, Big Style" },
      { property: "og:description", content: "A hair salon made exclusively for toddlers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: HeartHandshake, t: "Gentle, Toddler-Friendly Care", c: "text-primary" },
  { icon: Star, t: "Beautiful Styles for Little Ones", c: "text-secondary" },
  { icon: Smile, t: "Comfortable for Parents & Children", c: "text-accent" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-block rounded-full bg-lavender-soft px-4 py-1 text-sm font-bold text-lavender">Little Kids ♥ Big Styles</span>
            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
              Little Heads, <span className="text-primary">Big</span> <span className="text-secondary">Style!</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Welcome to TinyTresses Salon, where little ones get big smiles, beautiful styles and gentle care. We specialise exclusively in toddler-friendly hair services in a warm, fun and caring environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground shadow-soft hover:opacity-90">Book Your Little One</Link>
              <Link to="/gallery" className="rounded-full border-2 border-secondary px-7 py-3 font-bold text-secondary hover:bg-secondary hover:text-secondary-foreground">Explore Our Styles</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-accent/40" />
            <div className="absolute -bottom-5 -right-3 h-28 w-28 rounded-full bg-secondary/30" />
            <img src={images.hero} alt="Smiling toddler with natural puffs in a lavender salon chair" width={1024} height={1152} className="relative rounded-[2.5rem] border-8 border-card object-cover shadow-soft" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.t} className="card-soft flex items-center gap-4 p-6">
            <b.icon className={`h-9 w-9 shrink-0 ${b.c}`} />
            <p className="font-display text-lg font-semibold">{b.t}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="text-center text-4xl font-bold">Our Services</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <div key={s.id} className="card-soft overflow-hidden">
              <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="font-bold text-primary hover:underline">See all services →</Link>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="text-center text-4xl font-bold">What Parents Say</h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">Sample testimonials — to be replaced with genuine feedback.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {["“Sample: My daughter couldn't stop smiling at her new puffs!”", "“Sample: So patient with my son during his first haircut.”"].map((q) => (
            <blockquote key={q} className="card-soft border-l-8 border-lavender p-6 italic">{q}</blockquote>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
