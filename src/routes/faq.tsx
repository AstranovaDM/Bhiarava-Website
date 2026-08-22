import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Plus, Minus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Frequently asked questions about buying, financing and owning plots with Bhairava Infra." },
      { property: "og:title", content: "FAQ — Bhairava Infra" },
      { property: "og:description", content: "Answers on approvals, NRI buying, financing and site visits." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { cat: "Legal", q: "Are Bhairava projects approved?", a: "Yes. Every project is fully approved under DTCP, HMDA or RERA as applicable, with clear encumbrance certificates available for review before booking." },
  { cat: "Plots", q: "What plot sizes are available?", a: "Our layouts typically offer 150–700 sq yd plots to suit first-time buyers, families and premium villa builders." },
  { cat: "NRI", q: "Can I book a plot as an NRI?", a: "Absolutely. We have a dedicated NRI desk that assists with documentation, POA, remote registration and post-purchase support." },
  { cat: "Financing", q: "Is home-loan financing available?", a: "Yes. All our projects are pre-approved with leading banks and NBFCs, and our team can help you compare offers." },
  { cat: "Investment", q: "How is appreciation calculated?", a: "Historical appreciation is based on registered sale-deed prices across our earliest projects. We share detailed data during your site visit." },
  { cat: "Visit", q: "What is the site-visit experience like?", a: "A chauffeured tour of the master plan, a walk through infrastructure milestones, and a private investment consultation — usually 90 minutes." },
  { cat: "Financing", q: "Are there payment plans?", a: "Yes — flexible construction-linked and time-linked plans are offered on select projects." },
  { cat: "Legal", q: "Do you offer post-registration support?", a: "Yes. We assist with fencing, boundary walls, construction referrals and future resale coordination." },
];

const categories = ["All", "Legal", "Plots", "NRI", "Financing", "Investment", "Visit"];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () =>
      faqs.filter(
        (f) =>
          (cat === "All" || f.cat === cat) &&
          (q === "" || f.q.toLowerCase().includes(q.toLowerCase()) || f.a.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Answers"
        title={<>Everything you'd like to <em className="gold-text not-italic">know</em>.</>}
        intro="Common questions from first-time buyers, families, NRIs and long-term investors."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 shadow-[var(--shadow-soft)]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search FAQs"
              className="min-w-0 flex-1 bg-transparent py-3.5 text-sm focus:outline-none"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  cat === c ? "border-gold bg-gold text-ink" : "border-border text-foreground hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                  >
                    <div>
                      <div className="text-[0.6rem] font-semibold uppercase tracking-widest text-gold">{f.cat}</div>
                      <div className="mt-1 font-serif text-lg md:text-xl">{f.q}</div>
                    </div>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${isOpen ? "border-gold bg-gold text-ink" : "border-border text-muted-foreground"}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-muted-foreground md:px-8">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <p className="p-8 text-center text-sm text-muted-foreground">No questions match your search.</p>
            )}
          </div>
        </div>
      </Section>
      <CTABand />
    </SiteLayout>
  );
}
