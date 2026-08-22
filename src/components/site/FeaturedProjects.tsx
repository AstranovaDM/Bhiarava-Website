import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

export function FeaturedProjects() {
  return (
    <Section id="projects" className="bg-background">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Signature Projects"
          title={<>Addresses crafted for <em className="gold-text not-italic">generations</em>.</>}
          intro="Each Bhairava community is master-planned around long-term appreciation, world-class infrastructure and a lifestyle you will be proud to call home."
        />
        <Link to="/projects" className="btn-outline-ivory !text-foreground !border-border hover:!bg-ink hover:!text-white">
          View all projects <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
