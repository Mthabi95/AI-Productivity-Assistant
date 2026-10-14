import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { services } from "@/lib/salon";

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): { service?: string | undefined } => ({
    service: typeof s["service"] === "string" ? s["service"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book an Appointment — TinyTresses Salon" },
      { name: "description", content: "Request a toddler hair appointment at TinyTresses Salon." },
      { property: "og:title", content: "Book Your Little One — TinyTresses Salon" },
      { property: "og:description", content: "Request an appointment for your toddler." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Book,
});

const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];
const field = "mt-1 w-full rounded-2xl border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Book() {
  const { service } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    if (!String(f.get("parent")).trim()) err["parent"] = "Please enter your name.";
    if (!/^[+\d\s()-]{7,}$/.test(String(f.get("phone")))) err["phone"] = "Please enter a valid contact number.";
    if (!f.get("service")) err["service"] = "Please choose a service.";
    if (!f.get("date")) err["date"] = "Please choose a date.";
    if (!f.get("time")) err["time"] = "Please choose a time.";
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  }

  return (
    <SiteLayout>
      <PageHeader title="Book an Appointment" sub="Demo appointment request — bookings are not saved yet and are not confirmed." />
      <div className="mx-auto max-w-2xl px-5">
        {done ? (
          <div className="card-soft p-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-secondary" />
            <h2 className="mt-4 text-2xl font-bold">Request received (demo)</h2>
            <p className="mt-2 text-muted-foreground">This is a prototype — your request was not saved. Once online booking is connected, the salon will review and confirm it.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="card-soft grid gap-5 p-8">
            {[["parent", "Parent or guardian's name *", "text"], ["phone", "Contact number *", "tel"], ["email", "Email (optional)", "email"], ["child", "Toddler's first name or nickname (optional)", "text"]].map(([n, l, t]) => (
              <label key={n} className="text-sm font-semibold">{l}
                <input name={n} type={t} className={field} />
                {n && errors[n] && <span className="text-xs text-destructive">{errors[n]}</span>}
              </label>
            ))}
            <label className="text-sm font-semibold">Service *
              <select name="service" defaultValue={service ?? ""} className={field}>
                <option value="">Choose a service</option>
                {services.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
              {errors["service"] && <span className="text-xs text-destructive">{errors["service"]}</span>}
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">Preferred date *
                <input name="date" type="date" min={new Date().toISOString().slice(0, 10)} className={field} />
                {errors["date"] && <span className="text-xs text-destructive">{errors["date"]}</span>}
              </label>
              <label className="text-sm font-semibold">Time *
                <select name="time" defaultValue="" className={field}>
                  <option value="">Choose a time</option>
                  {times.map((t) => <option key={t}>{t}</option>)}
                </select>
                {errors["time"] && <span className="text-xs text-destructive">{errors["time"]}</span>}
              </label>
            </div>
            <label className="text-sm font-semibold">Special styling requests
              <textarea name="requests" rows={3} className={field} />
            </label>
            <label className="text-sm font-semibold">Hair-care notes (optional)
              <textarea name="notes" rows={2} className={field} />
            </label>
            <button className="rounded-full bg-primary py-3 font-bold text-primary-foreground shadow-soft hover:opacity-90">Send Request</button>
          </form>
        )}
      </div>
    </SiteLayout>
  );
}
