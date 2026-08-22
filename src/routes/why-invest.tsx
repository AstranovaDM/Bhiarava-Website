import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section, SectionHeader } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Stats } from "@/components/site/Stats";
import { TrendingUp, Building2, GraduationCap, Hospital, HandCoins, LineChart } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/why-invest")({
  head: () => ({
    meta: [
      { title: "Why Invest — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Growth corridors, infrastructure, ROI and the long-term value of investing with Bhairava Infra." },
      { property: "og:title", content: "Why Invest with Bhairava Infra" },
      { property: "og:description", content: "The enduring forces behind Bhairava plotted-community appreciation." },
      { property: "og:url", content: "/why-invest" },
    ],
    links: [{ rel: "canonical", href: "/why-invest" }],
  }),
  component: WhyInvestPage,
});

const drivers = [
  { icon: TrendingUp, title: "Future Growth", body: "Locations chosen along corridors flagged for the next decade of state and central infrastructure." },
  { icon: LineChart, title: "High ROI Potential", body: "Our earliest layouts have historically delivered 3× – 5× appreciation over 5–7 year holds." },
  { icon: Building2, title: "Commercial Growth", body: "Adjacent IT parks, warehousing hubs and SEZs are creating strong end-user demand." },
  { icon: GraduationCap, title: "Educational Hub", body: "Top schools, universities and coaching hubs within a 15-minute radius of every project." },
  { icon: Hospital, title: "Healthcare Access", body: "Multi-speciality hospitals and wellness centres integrated into the master plan neighborhoods." },
  { icon: HandCoins, title: "Rental Potential", body: "Emerging plotted micro-markets with fast-rising rental yields for constructed villas." },
];

const bars = [
  { year: "2019", value: 100 },
  { year: "2020", value: 118 },
  { year: "2021", value: 142 },
  { year: "2022", value: 178 },
  { year: "2023", value: 226 },
  { year: "2024", value: 284 },
  { year: "2025", value: 352 },
];

function WhyInvestPage() {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Why Invest"
        title={<>Land, chosen for the <em className="gold-text not-italic">long game</em>.</>}
        intro="Six enduring forces make Bhairava's plotted developments a considered investment for families, NRIs and long-term wealth builders."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {drivers.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="group rounded-2xl border border-border bg-card p-8 transition hover:border-gold hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-royal-deep text-gold transition group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-soft group-hover:text-ink">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeader
          eyebrow="Appreciation Trend"
          title={<>Indexed land values, our <em className="gold-text not-italic">flagship corridor</em>.</>}
          intro="Illustrative appreciation index (2019 = 100) across our earliest launched micro-market. Past performance is indicative and not guaranteed."
        />
        <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10">
          <div className="flex h-72 items-end gap-3 md:gap-6">
            {bars.map((b, i) => (
              <div key={b.year} className="flex flex-1 flex-col items-center gap-3">
                <div className="relative flex w-full flex-1 items-end">
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: `${(b.value / max) * 100}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.1, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-royal to-gold shadow-[0_0_24px_-8px_var(--gold)]"
                  />
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-royal"
                  >
                    {b.value}
                  </motion.span>
                </div>
                <span className="text-xs text-muted-foreground">{b.year}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Stats />
      <CTABand />
    </SiteLayout>
  );
}
