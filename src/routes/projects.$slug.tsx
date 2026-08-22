import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { getProject, projects } from "@/lib/projects";
import { ArrowLeft, ArrowUpRight, Building2, Download, GraduationCap, Hospital, MapPin, Plane, Route as RouteIcon, ShoppingBag, ShieldCheck, TrendingUp, CheckCircle2, Send, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.name} — ${p.location} | Bhairava Infra` : "Project — Bhairava Infra" },
        { name: "description", content: p?.tagline ?? "" },
        { property: "og:title", content: p?.name ?? "" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/projects/${p?.slug ?? ""}` },
        { name: "twitter:title", content: p?.name ?? "" },
        { name: "twitter:description", content: p?.tagline ?? "" },
      ],
      links: p ? [{ rel: "canonical", href: `/projects/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <Section className="min-h-[50vh] pt-40">
        <p className="text-center text-muted-foreground">Project not found.</p>
        <div className="mt-6 text-center">
          <Link to="/projects" className="btn-gold">Back to projects</Link>
        </div>
      </Section>
    </SiteLayout>
  ),
  component: ProjectDetailPage,
});

const nearbyIcon = {
  school: GraduationCap,
  hospital: Hospital,
  airport: Plane,
  tech: Building2,
  highway: RouteIcon,
  market: ShoppingBag,
} as const;

function ProjectDetailPage() {
  const { project: p } = Route.useLoaderData() as { project: NonNullable<ReturnType<typeof getProject>> };
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const other = projects.filter((x) => x.slug !== p.slug);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[75svh] min-h-[540px] w-full overflow-hidden bg-ink text-white">
        <motion.img
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
          src={p.gallery[active]}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="container-lux relative z-10 flex h-full flex-col justify-end pb-20 pt-32">
          <Link to="/projects" className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 hover:text-gold transition">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gold px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ink">{p.status}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-white">
              <ShieldCheck className="h-3 w-3 text-gold" /> {p.approval}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-royal-deep/70 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-widest text-gold-soft">
              <TrendingUp className="h-3 w-3" /> {p.appreciation}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">{p.name}</h1>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-white/80"><MapPin className="h-4 w-4 text-gold" /> {p.location}</p>
        </div>

        {/* Thumbs */}
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2 px-4">
          {p.gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`h-14 w-20 overflow-hidden rounded-md border-2 transition ${active === i ? "border-gold" : "border-white/30 opacity-70 hover:opacity-100"}`}
            >
              <img src={g} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-14 lg:col-span-2">
            {/* Overview */}
            <div>
              <span className="eyebrow">Overview</span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">{p.tagline}</h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ["Sizes", p.sizes],
                  ["Starting", p.startingPrice],
                  ["Approval", p.approval],
                  ["Status", p.status],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-border bg-card p-4">
                    <div className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">{k}</div>
                    <div className="mt-1 font-serif text-lg text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <span className="eyebrow">Community Highlights</span>
              <h3 className="mt-3 font-serif text-3xl">Every detail, master-planned.</h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Master layout placeholder */}
            <div>
              <span className="eyebrow">Interactive Master Layout</span>
              <h3 className="mt-3 font-serif text-3xl">Explore the plan.</h3>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-royal-deep to-ink">
                <img src={p.image} alt="Master layout preview" className="absolute inset-0 h-full w-full object-cover opacity-40" />
                <svg viewBox="0 0 800 450" className="absolute inset-0 h-full w-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(199,154,59,0.25)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="800" height="450" fill="url(#grid)" />
                  {[
                    { x: 120, y: 100, w: 90, h: 60, n: "A-01" },
                    { x: 230, y: 100, w: 90, h: 60, n: "A-02" },
                    { x: 340, y: 100, w: 90, h: 60, n: "A-03" },
                    { x: 120, y: 200, w: 90, h: 60, n: "B-01" },
                    { x: 230, y: 200, w: 90, h: 60, n: "B-02" },
                    { x: 340, y: 200, w: 90, h: 60, n: "B-03" },
                    { x: 500, y: 130, w: 180, h: 130, n: "Clubhouse" },
                  ].map((r) => (
                    <g key={r.n} className="group cursor-pointer">
                      <rect x={r.x} y={r.y} width={r.w} height={r.h} fill="rgba(199,154,59,0.15)" stroke="rgba(199,154,59,0.6)" strokeWidth="1" className="transition-all group-hover:fill-[rgba(199,154,59,0.45)]" />
                      <text x={r.x + r.w / 2} y={r.y + r.h / 2 + 4} textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Inter">{r.n}</text>
                    </g>
                  ))}
                </svg>
                <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-[0.65rem] uppercase tracking-widest text-white/80 backdrop-blur">Hover plots for details</div>
              </div>
            </div>

            {/* Nearby */}
            <div>
              <span className="eyebrow">Location Advantage</span>
              <h3 className="mt-3 font-serif text-3xl">Everything within reach.</h3>
              <ol className="mt-8 space-y-4 border-l border-border pl-6">
                {p.nearby.map((n) => {
                  const Icon = nearbyIcon[n.type];
                  return (
                    <li key={n.name} className="relative">
                      <span className="absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-full border border-gold bg-background text-gold">
                        <Icon className="h-3 w-3" />
                      </span>
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="font-medium text-foreground">{n.name}</div>
                        <div className="font-serif text-lg text-royal">{n.distance}</div>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title={`${p.name} location map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(p.location)}&output=embed`}
                  width="100%"
                  height="360"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full"
                />
              </div>
            </div>
          </div>

          {/* Sticky enquiry */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="text-[0.65rem] uppercase tracking-widest text-gold">Book a private site visit</div>
                <h4 className="mt-1 font-serif text-2xl">Talk to the investment desk</h4>
                <div className="mt-5 space-y-3">
                  <input required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                  <input required type="tel" placeholder="Phone" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                  <input type="date" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-gold focus:outline-none" />
                </div>
                <button type="submit" className="btn-gold mt-5 w-full">
                  {sent ? "We'll be in touch" : (<>Request visit <Send className="h-4 w-4" /></>)}
                </button>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a href="tel:+919392893933" className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground hover:border-gold hover:text-gold transition">
                    <Phone className="h-3.5 w-3.5" /> Call
                  </a>
                  <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground hover:border-gold hover:text-gold transition">
                    <Download className="h-3.5 w-3.5" /> Brochure
                  </a>
                </div>
              </form>

              <div className="rounded-3xl border border-border bg-gradient-to-br from-royal-deep to-ink p-6 text-white">
                <div className="text-[0.65rem] uppercase tracking-widest text-gold-soft">Starting Price</div>
                <div className="mt-1 font-serif text-3xl text-gold">{p.startingPrice}</div>
                <div className="mt-4 text-sm text-white/70">{p.sizes} · {p.approval}</div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Other projects */}
      <Section className="bg-secondary/40">
        <div className="flex items-end justify-between">
          <div>
            <span className="eyebrow">More Communities</span>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">Continue exploring</h3>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-royal hover:text-gold">
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {other.map((o) => (
            <Link
              key={o.slug}
              to="/projects/$slug"
              params={{ slug: o.slug }}
              className="group relative overflow-hidden rounded-3xl bg-card ring-1 ring-border transition hover:-translate-y-1 hover:shadow-[var(--shadow-lux)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={o.image} alt={o.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute inset-x-5 bottom-4 text-white">
                  <div className="font-serif text-2xl">{o.name}</div>
                  <div className="text-xs opacity-80">{o.location}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
