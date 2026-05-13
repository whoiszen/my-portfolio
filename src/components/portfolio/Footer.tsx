export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative py-12"
      style={{ borderTop: "1px solid oklch(0.78 0.16 80 / 0.10)" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

          {/* Logo + tagline */}
          <div>
            <span
              className="font-display text-2xl font-extrabold"
              style={{ color: "var(--gold)", letterSpacing: "-0.03em" }}
            >
              AJ.
            </span>
            <p className="mt-1 text-xs text-muted-foreground">
              Built with ☕, automation, and a little AI magic.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["about", "skills", "services", "projects", "experience", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="capitalize transition-colors hover:text-foreground"
                style={{ color: "var(--muted-foreground)" }}
              >
                {s}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { label: "GitHub",        href: "https://github.com/whoiszen" },
              { label: "LinkedIn",      href: "https://www.linkedin.com/in/aj-josol-93836a36a/" },
              { label: "OnlineJobs",    href: "https://v2.onlinejobs.ph/jobseekers/info/4245030" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all hover:scale-105"
                style={{
                  background: "oklch(0.78 0.16 80 / 0.08)",
                  border: "1px solid oklch(0.78 0.16 80 / 0.18)",
                  color: "var(--gold)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col items-center justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row"
          style={{ borderColor: "oklch(1 0 0 / 0.06)" }}
        >
          <span>© {year} AJ P. Josol. All rights reserved.</span>
          <span
            className="text-[10px] uppercase tracking-[0.25em]"
            style={{ color: "oklch(0.78 0.16 80 / 0.50)" }}
          >
            Zapier · OpenAI · Laravel · Vue.js 
          </span>
        </div>
      </div>
    </footer>
  );
}
