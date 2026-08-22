import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bhairava Infra & Realtors LLP" },
      { name: "description", content: "Aerial shots, construction updates and community life across Bhairava plotted developments." },
      { property: "og:title", content: "Gallery — Bhairava Infra" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: hero1, alt: "Grand entrance at golden hour", span: "col-span-2 row-span-2" },
  { src: hero2, alt: "Illuminated luxury gate at dusk", span: "" },
  { src: project1, alt: "Aerial view of plotted layout", span: "" },
  { src: hero3, alt: "Tree-lined boulevards", span: "col-span-2" },
  { src: hero4, alt: "Community park at sunset", span: "" },
  { src: project2, alt: "Villa plots near hills", span: "" },
  { src: hero5, alt: "Modern luxury clubhouse", span: "col-span-2 row-span-2" },
  { src: project3, alt: "Landscaped walking paths", span: "" },
  { src: hero6, alt: "Township at twilight", span: "col-span-2" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Gallery"
        title={<>Frames from our <em className="gold-text not-italic">communities</em>.</>}
        intro="Aerial views, construction milestones and everyday life across our master-planned developments."
      />

      <Section>
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((im, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-2xl bg-secondary ${im.span}`}>
              <img src={im.src} alt={im.alt} loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute inset-x-4 bottom-4 translate-y-2 text-xs uppercase tracking-widest text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {im.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CTABand />
    </SiteLayout>
  );
}
