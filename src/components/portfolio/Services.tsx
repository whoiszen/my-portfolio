import { Zap, Brain, Monitor, Check } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: Zap,
    tier: "Starter",
    title: "Zapier Automation",
    price: "$150",
    unit: "per project",
    description:
      "Multi-step Zapier workflows that connect your apps, eliminate manual work, and run 24/7 without you.",
    features: [
      "Multi-step Zap design & build",
      "CRM, email & Slack integrations",
      "Conditional logic with Paths",
      "Testing, documentation & handoff",
    ],
    highlight: false,
  },
  {
    icon: Brain,
    tier: "Professional",
    title: "AI-Powered Workflows",
    price: "$800",
    unit: "per project",
    description:
      "OpenAI-integrated pipelines that generate personalized emails, score leads, and make intelligent decisions automatically.",
    features: [
      "OpenAI GPT integration via Zapier",
      "Personalized AI email generation",
      "Lead scoring & smart routing",
      "Webhook + Postman payload testing",
      "Airtable or Sheets CRM setup",
    ],
    highlight: true,
  },
  {
    icon: Monitor,
    tier: "Ongoing",
    title: "Virtual Assistant",
    price: "$10",
    unit: "per hour",
    description:
      "Reliable remote support for data management, research, coordination, and day-to-day admin tasks.",
    features: [
      "Data entry & database management",
      "Monday.com / Procore / BuildLogic",
      "Client research & record cleanup",
      "Google Workspace & Office 365",
      "Async-friendly, timezone flexible",
    ],
    highlight: false,
  },
  {
    icon: Monitor,
    tier: "Web Development",
    title: "Web App & SaaS Projects",
    price: "$1,500",
    unit: "per project",
    description:
      "Full-stack web development for marketing sites, dashboards, marketplaces, and custom applications using Laravel, Vue, and Tailwind.",
    features: [
      "Laravel/Vue SaaS and marketplace build",
      "Responsive UI, forms, and CMS workflows",
      "E-commerce and booking experiences",
      "Admin dashboards and role-based access",
      "Deployment-ready Vite/Tailwind stack",
    ],
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          subtitle="Transparent pricing, real deliverables. No hourly surprises on project work."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.10}>
              <article
                className="relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: s.highlight
                    ? "oklch(0.78 0.16 80 / 0.07)"
                    : "oklch(1 0 0 / 0.03)",
                  border: s.highlight
                    ? "1px solid oklch(0.78 0.16 80 / 0.40)"
                    : "1px solid oklch(1 0 0 / 0.08)",
                  boxShadow: s.highlight
                    ? "var(--shadow-glow)"
                    : "var(--shadow-elegant)",
                }}
              >
                {s.highlight && (
                  <div
                    className="absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "oklch(0.10 0.01 265)",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{
                    background: s.highlight
                      ? "var(--gradient-primary)"
                      : "oklch(0.78 0.16 80 / 0.10)",
                    boxShadow: s.highlight ? "var(--shadow-glow)" : "none",
                  }}
                >
                  <s.icon
                    size={20}
                    style={{
                      color: s.highlight
                        ? "oklch(0.10 0.01 265)"
                        : "var(--gold)",
                    }}
                  />
                </div>

                {/* Tier label */}
                <div
                  className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "var(--gold-dim)" }}
                >
                  {s.tier}
                </div>

                <h3 className="mt-1 font-display text-xl font-extrabold">{s.title}</h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span
                    className="font-display text-4xl font-extrabold"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{s.unit}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "var(--gold)" }}
                      />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-8 block rounded-full py-3 text-center text-sm font-bold font-display transition-all hover:scale-105"
                  style={
                    s.highlight
                      ? {
                          background: "var(--gradient-primary)",
                          color: "oklch(0.10 0.01 265)",
                          boxShadow: "var(--shadow-glow)",
                        }
                      : {
                          border: "1px solid oklch(0.78 0.16 80 / 0.30)",
                          color: "var(--gold)",
                          background: "oklch(0.78 0.16 80 / 0.05)",
                        }
                  }
                >
                  Get Started
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Need something custom?{" "}
            <a
              href="#contact"
              style={{ color: "var(--gold)" }}
              className="font-semibold hover:underline"
            >
              Let's talk
            </a>{" "}
            — I'm happy to scope a project together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
