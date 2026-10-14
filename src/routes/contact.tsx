import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — TinyTresses Salon" },
      { name: "description", content: "Get in touch with TinyTresses Salon, the toddler-only hair salon." },
      { property: "og:title", content: "Contact TinyTresses Salon" },
      { property: "og:description", content: "We'd love to hear from you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: Phone, l: "Phone", v: "To be added by the salon" },
  { icon: Mail, l: "Email", v: "To be added by the salon" },
  { icon: MapPin, l: "Address", v: "To be added by the salon" },
  { icon: Clock, l: "Hours", v: "To be added by the salon" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHeader title="Contact Us" />
      <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-2">
        <div className="grid gap-4">
          {info.map((i) => (
            <div key={i.l} className="card-soft flex items-center gap-4 p-5">
              <i.icon className="h-6 w-6 text-secondary" />
              <div><p className="font-bold">{i.l}</p><p className="text-sm text-muted-foreground">{i.v}</p></div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-soft grid gap-4 p-8">
          {sent ? <p className="font-semibold text-secondary">Thanks! (Demo — message not sent yet.)</p> : <>
            <label className="text-sm font-semibold">Name<input required className="mt-1 w-full rounded-2xl border border-input px-4 py-3" /></label>
            <label className="text-sm font-semibold">Email or phone<input required className="mt-1 w-full rounded-2xl border border-input px-4 py-3" /></label>
            <label className="text-sm font-semibold">Message<textarea required rows={4} className="mt-1 w-full rounded-2xl border border-input px-4 py-3" /></label>
            <button className="rounded-full bg-primary py-3 font-bold text-primary-foreground">Send Message</button>
          </>}
        </form>
      </div>
    </SiteLayout>
  );
}
