import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { gallery } from "@/lib/salon";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Hairstyles Gallery — TinyTresses Salon" },
      { name: "description", content: "Toddler hairstyle inspiration: haircuts, natural styles, braids, puffs and special occasion looks." },
      { property: "og:title", content: "Toddler Hairstyles Gallery — TinyTresses" },
      { property: "og:description", content: "Browse adorable toddler hairstyle ideas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Gallery,
});

const cats = ["All", "Haircuts", "Natural Styles", "Braids", "Puffs and Ponytails", "Special Occasions"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<(typeof gallery)[number] | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);
  return (
    <SiteLayout>
      <PageHeader title="Hairstyles Gallery" sub="Illustrative inspiration images — not actual salon clients." />
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-secondary text-secondary-foreground" : "bg-card text-foreground hover:bg-lavender-soft"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {items.map((g, i) => (
            <button key={i} onClick={() => setOpen(g)} className="group overflow-hidden rounded-3xl shadow-soft">
              <img src={g.src} alt={g.alt} loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover transition group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div role="dialog" className="fixed inset-0 z-50 grid place-items-center bg-foreground/70 p-5" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 rounded-full bg-card p-2"><X /></button>
          <figure className="max-w-2xl">
            <img src={open.src} alt={open.alt} className="max-h-[80vh] rounded-3xl" />
            <figcaption className="mt-3 text-center font-semibold text-card">{open.cat}</figcaption>
          </figure>
        </div>
      )}
    </SiteLayout>
  );
}
