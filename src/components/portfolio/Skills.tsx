import { Zap, Code2, FolderOpen, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  {
    icon: Zap,
    title: "Automation & AI",
    items: [
      "Zapier multi-step workflows",
      "OpenAI (GPT-4o-mini) integration",
      "Webhook design & Postman testing",
      "Lead scoring & routing pipelines",
      "Prompt engineering for consistent AI output",
    ],
  },
  {
    icon: Code2,
    title: "Development & Tech",
    items: [
      "PHP · JavaScript · Java",
      "Laravel · Livewire · Vue.js",
      "Flutter · HTML/CSS · Bootstrap",
      "Full-stack development",
      "AI-assisted coding (Cursor, GitHub Copilot)",
    ],
  },
  {
    icon: FolderOpen,
    title: "Virtual Assistance",
    items: [
      "Data entry & database management",
      "Social media management",
      "Client research & coordination",
      "Calendar & file management",
      "Microsoft Office · Google Workspace",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "ChatGPT · Cursor · DeepSeek",
      "GitHub Copilot · Blackbox.ai",
      "Canva · Procore · Monday.com",
      "Airtable · Typeform · Slack",
      "Postman · Webhooks by Zapier",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="What I Bring to the Table"
          subtitle="A blend of automation thinking, AI literacy, full-stack code, and real-world VA discipline."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <article
                className="group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                  boxShadow: "var(--shadow-elegant)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(0.78 0.16 80 / 0.30)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "oklch(1 0 0 / 0.08)";
                }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "oklch(0.78 0.16 80 / 0.08)",
                    filter: "blur(32px)",
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--shadow-glow)",
                    }}
                  >
                    <c.icon size={20} style={{ color: "oklch(0.10 0.01 265)" }} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-extrabold">{c.title}</h3>

                  <ul className="mt-4 space-y-2.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span
                          className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: "var(--gold)" }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
