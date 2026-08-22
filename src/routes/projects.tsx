import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { projects } from "@/lib/projects";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { CTABand } from "@/components/site/CTABand";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Explore ongoing and upcoming premium plotted developments by Bhairava Infra across Hyderabad and Telangana." },
      { property: "og:title", content: "Projects — Bhairava Infra" },
      { property: "og:description", content: "Ongoing, upcoming and ready-to-register plotted communities." },
      { property: "og:url", content: "/projects" },
      { name: "twitter:title", content: "Projects — Bhairava Infra" },
      { name: "twitter:description", content: "Ongoing, upcoming and ready-to-register plotted communities." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<string>("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (status === "All" || p.status === status) &&
          (q === "" ||
            p.name.toLowerCase().includes(q.toLowerCase()) ||
            p.location.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, status],
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Projects"
        title={<>Signature plotted <em className="gold-text not-italic">communities</em>.</>}
        intro="A curated portfolio of premium, fully-approved plotted developments across the Hyderabad and Telangana growth corridors."
      />

      <Section>
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-secondary/60 px-5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by project or location"
              aria-label="Search projects"
              className="min-w-0 flex-1 bg-transparent py-3 text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            {["All", "New Launch", "Ongoing", "Ready to Register"].map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition ${
                  status === s
                    ? "border-gold bg-gold text-ink"
                    : "border-border text-foreground hover:border-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No projects match your filters.</p>
        )}
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
