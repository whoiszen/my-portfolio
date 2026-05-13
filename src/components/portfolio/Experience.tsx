import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    role: "Virtual Assistant",
    company: "Construction Industry — Outsourced Role",
    period: "Recent",
    bullets: [
      "Managed and updated company databases on Monday.com, Procore, and BuildLogic — maintained 100% data accuracy",
      "Researched and systematized 600+ client records (ABN, contacts, addresses), cutting data retrieval time by ~30%",
      "Cleaned and migrated Excel data to new systems, minimizing transition errors",
    ],
  },
  {
    role: "Vibe Coder & AI-Powered Development Assistant",
    company: "Academic Projects",
    period: "2023 – Present",
    bullets: [
      "Accelerated Laravel + Livewire development using AI tools (ChatGPT, Cursor, GitHub Copilot), cutting boilerplate time by 40%",
      "Built full-stack components: migrations, models, controllers, Blade templates — without disrupting core functionality",
      "Applied prompt engineering to debug and optimize across PHP, JavaScript, Flutter, and Vue.js",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 section-divider">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Experience" title="Work Journey" />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px md:left-1/2"
            style={{
              background: "linear-gradient(to bottom, var(--gold), oklch(0.68 0.18 55 / 0.3), transparent)",
            }}
          />

          <div className="space-y-12">
            {items.map((it, idx) => (
              <Reveal key={it.role} delay={idx * 0.1}>
                <div className={`relative md:flex ${idx % 2 ? "md:flex-row-reverse" : ""}`}>
                  {/* Dot */}
                  <div
                    className="absolute left-5 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full ring-4 md:left-1/2"
                    style={{
                      background: "var(--gradient-primary)",
                      ringColor: "var(--background)",
                      boxShadow: "var(--shadow-glow)",
                    }}
                  />

                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-10">
                    <div
                      className="rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "oklch(1 0 0 / 0.04)",
                        border: "1px solid oklch(1 0 0 / 0.08)",
                        boxShadow: "var(--shadow-elegant)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(0.78 0.16 80 / 0.28)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(1 0 0 / 0.08)";
                      }}
                    >
                      <div
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: "var(--gold)" }}
                      >
                        {it.period}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-extrabold">{it.role}</h3>
                      <div className="text-sm text-muted-foreground">{it.company}</div>

                      <ul className="mt-4 space-y-2.5">
                        {it.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <span
                              className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                              style={{ background: "var(--gold)" }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
