import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base text-muted-foreground md:text-lg">{intro}</p>}
      <div className={`mt-6 h-px w-24 bg-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-28 ${className}`}>
      <div className="container-lux">{children}</div>
    </section>
  );
}
