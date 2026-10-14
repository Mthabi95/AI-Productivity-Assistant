import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { services } from "@/lib/salon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — TinyTresses Salon" },
      { name: "description", content: "Toddler haircuts, natural hair styling, mini braids, puffs, gentle detangling and special occasion styles." },
      { property: "og:title", content: "Toddler Hair Services — TinyTresses Salon" },
      { property: "og:description", content: "Gentle hair services made for toddlers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader title="Our Services" sub="Every service is designed around little heads and little personalities. Prices shown are placeholders until confirmed." />
      <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.id} className="card-soft flex flex-col overflow-hidden">
            <img src={s.img} alt={s.name} loading="lazy" width={1024} height={1024} className="h-52 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-secondary"><Clock className="h-4 w-4" />{s.duration}</span>
                <span className="font-bold text-muted-foreground">{s.price}</span>
              </div>
              <Link to="/book" search={{ service: s.id }} className="mt-5 rounded-full bg-primary py-2.5 text-center font-bold text-primary-foreground hover:opacity-90">Book This Service</Link>
            </div>
          </div>
        ))}
      </div>
    </SiteLayout>
  );
}
