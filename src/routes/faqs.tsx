import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { faqs } from "@/lib/salon";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — TinyTresses Salon" },
      { name: "description", content: "Answers to common questions about toddler appointments at TinyTresses Salon." },
      { property: "og:title", content: "Frequently Asked Questions — TinyTresses" },
      { property: "og:description", content: "Everything parents want to know before a visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <SiteLayout>
      <PageHeader title="Frequently Asked Questions" />
      <div className="mx-auto grid max-w-3xl gap-4 px-5">
        {faqs.map(([q, a]) => (
          <details key={q} className="card-soft group p-6">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold marker:hidden">{q}</summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </SiteLayout>
  );
}
