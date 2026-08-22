import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader } from "@/components/site/Section";

const stats = [
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 4500, suffix: "+", label: "Happy Families" },
  { value: 98, suffix: "%", label: "On-Time Handover" },
];

function useCounter(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const r = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r);
  }, [active, target, duration]);
  return n;
}

function Stat({ value, suffix, label, active }: (typeof stats)[number] & { active: boolean }) {
  const n = useCounter(value, active);
  return (
    <div className="text-center">
      <div className="font-serif text-5xl text-gold md:text-6xl">
        {n.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-white/70">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(true)),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden bg-royal-deep text-white">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 80% at 20% 0%, rgba(199,154,59,0.35), transparent), radial-gradient(50% 60% at 100% 100%, rgba(27,95,167,0.4), transparent)" }} />
      <Section className="relative !py-20">
        <SectionHeader
          eyebrow="By the Numbers"
          title={<span className="text-white">A track record built on <em className="gold-text not-italic">trust</em>.</span>}
          align="center"
        />
        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} active={active} />
          ))}
        </div>
      </Section>
    </div>
  );
}
