import logo from "@/assets/bhairava-logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <a href="/" aria-label="Bhairava Infra & Realtors LLP — Home" className="flex min-w-0 items-center">
      <img src={logo} alt="" className="h-10 w-auto shrink-0 object-contain sm:h-13 -mr-2.5 sm:-mr-4" />
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`font-serif text-[0.95rem] font-semibold tracking-[0.16em] sm:text-lg sm:tracking-[0.18em] ${text}`}>BHAIRAVA</span>
        <span className={`mt-0.5 truncate text-[0.5rem] font-medium tracking-[0.24em] sm:text-[0.6rem] sm:tracking-[0.32em] ${sub}`}>
          INFRA &amp; REALTORS LLP
        </span>
      </span>
    </a>
  );
}
