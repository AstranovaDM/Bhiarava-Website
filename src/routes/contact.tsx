import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { Mail, MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Book a site visit, request a brochure or speak with our investment desk. Bhairava Infra & Realtors LLP, Hyderabad." },
      { property: "og:title", content: "Contact — Bhairava Infra" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const OFFICE_ADDRESS = "H.No. 5-31-8, 1st Floor, Above Bank of Maharashtra, 4/14, Brodipet";
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`;

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's plan your <em className="gold-text not-italic">next visit</em>.</>}
        intro="Our investment desk is available 7 days a week. Book a private site visit or request our latest brochure — we usually respond within an hour."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: MapPin, title: "Corporate Office", body: OFFICE_ADDRESS, href: MAPS_DIRECTIONS },
              { icon: Phone, title: "Speak with us", body: "+91 93928 93933", href: "tel:+919392893933" },
              { icon: MessageCircle, title: "WhatsApp", body: "+91 93928 93933", href: "https://wa.me/919392893933" },
              { icon: Clock, title: "Office Hours", body: "Mon – Sun · 9:30 AM to 7:30 PM" },
            ].map(({ icon: Icon, title, body, href }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-royal-deep text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
                  <div className="mt-1 font-medium text-foreground">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">{body}</a>
                    ) : body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]"
          >
            <h2 className="font-serif text-3xl">Book a private site visit</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill in a few details and our investment desk will call you back within the hour.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Preferred date" name="date" type="date" />
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Interested project</label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none">
                  <option>Any Bhairava project</option>
                  <option>Bhairava Greens</option>
                  <option>Bhairava Heights</option>
                  <option>Bhairava Meadows</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
                  placeholder="Tell us a little about what you're looking for…"
                />
              </div>
            </div>
            <button type="submit" className="btn-gold mt-8">
              {sent ? "Thank you — we'll be in touch" : (<>Request site visit <Send className="h-4 w-4" /></>)}
            </button>
          </form>
        </div>
      </Section>

      <section className="pb-24">
        <div className="container-lux">
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Bhairava Infra office location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <div className="mt-6 text-center">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}
