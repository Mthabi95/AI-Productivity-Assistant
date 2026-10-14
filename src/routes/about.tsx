import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { images } from "@/lib/salon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — TinyTresses Salon" },
      { name: "description", content: "A hair salon designed around the needs of toddlers, with patience and gentle care." },
      { property: "og:title", content: "About TinyTresses Salon" },
      { property: "og:description", content: "Every little one deserves to feel special." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader title="About TinyTresses" />
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2">
        <img src={images.curls} alt="Toddler with natural curls" loading="lazy" width={1024} height={1024} className="rounded-[2.5rem] shadow-soft" />
        <p className="text-lg leading-relaxed">
          At TinyTresses Salon, we believe every little one deserves to feel special. Our salon is designed around the needs of toddlers, with a gentle approach, patience and beautiful hairstyles made for little personalities. We aim to make every visit a positive experience for both children and their parents.
        </p>
      </div>
    </SiteLayout>
  );
}
