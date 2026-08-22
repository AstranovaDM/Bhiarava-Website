import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { AboutTeaser } from "@/components/site/AboutTeaser";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABand } from "@/components/site/CTABand";
import { Compass, Gem, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Our story, vision and values. Bhairava Infra develops master-planned plotted communities with legal clarity and long-term investment value." },
      { property: "og:title", content: "About Bhairava Infra & Realtors LLP" },
      { property: "og:description", content: "A decade of transparent dealings and premium plotted developments." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Gem, title: "Quality Without Compromise", body: "Materials, planning and finishes chosen for the next generation, not the next quarter." },
  { icon: HeartHandshake, title: "Transparency Always", body: "Clear titles, honest paperwork and disclosures — before you ever sign." },
  { icon: Compass, title: "Long-Term Thinking", body: "We invest years in choosing a location so you can invest a lifetime in living there." },
];

const timeline = [
  ["2013", "Founded with a promise — better land, honestly delivered."],
  ["2016", "Delivered our first master-planned plotted community."],
  ["2019", "Crossed 1,000 happy families across three districts."],
  ["2022", "Launched our first resort-style clubhouse community."],
  ["2025", "25+ projects, 4,500+ families, one enduring standard."],
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title={<>Building addresses that <em className="gold-text not-italic">outlast trends</em>.</>}
        intro="Bhairava Infra & Realtors LLP is a family-led developer focused on premium plotted communities across the Telangana growth corridors."
      />
      <AboutTeaser />

      <Section className="bg-secondary/40">
        <div className="grid gap-10 md:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-ink">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Our Journey</span>
          <h2 className="mt-3 font-serif text-4xl">A decade of quiet, deliberate growth.</h2>
          <ol className="mt-12 space-y-8 border-l border-border pl-8">
            {timeline.map(([year, text]) => (
              <li key={year} className="relative">
                <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-gold bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                </span>
                <div className="font-serif text-2xl text-royal">{year}</div>
                <p className="mt-1 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Stats />
      <Testimonials />
      <CTABand />
    </SiteLayout>
  );
}
