import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { ArrowUpRight, Clock } from "lucide-react";
import { useMemo, useState } from "react";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Journal — Bhairava Infra" },
      { name: "description", content: "Investment tips, buying guides, market updates and legal insights from Bhairava Infra." },
      { property: "og:title", content: "Insights & Journal — Bhairava Infra" },
      { property: "og:description", content: "Long-form perspectives on plotted-development investing." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { title: "The quiet case for open plots in 2026", cat: "Investment", read: "6 min", img: project1 },
  { title: "How to verify a clean title before you buy", cat: "Legal", read: "5 min", img: hero3 },
  { title: "Reading a master plan like a developer", cat: "Buying Guide", read: "8 min", img: hero5 },
  { title: "Hyderabad ORR: five corridors to watch", cat: "Market", read: "7 min", img: project2 },
  { title: "NRI investing: documentation & repatriation", cat: "NRI", read: "6 min", img: hero4 },
  { title: "Amenities that actually add resale value", cat: "Insight", read: "4 min", img: project3 },
];

const cats = ["All", "Investment", "Legal", "Buying Guide", "Market", "NRI", "Insight"];

function BlogPage() {
  const [cat, setCat] = useState("All");
  const [featured, ...rest] = posts;
  const filtered = useMemo(() => (cat === "All" ? rest : rest.filter((p) => p.cat === cat)), [cat, rest]);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journal"
        title={<>Insights for the <em className="gold-text not-italic">considered investor</em>.</>}
        intro="Long-form perspectives on land, legal clarity, market timing and building generational wealth through real estate."
      />

      <Section>
        <Link to="/blog" className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img src={featured.img} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" />
            <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ink">Featured</span>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="eyebrow">{featured.cat} · {featured.read} read</span>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground">A framework for thinking about plotted-development returns in a maturing Indian real estate market, and where the next decade of premium appreciation is likely to sit.</p>
            <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-royal group-hover:text-gold">
              Read essay <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
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

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-gold">{p.cat}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl leading-snug group-hover:text-royal transition">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">No articles in this category yet.</p>
        )}
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
