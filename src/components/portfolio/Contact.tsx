import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Code2, Globe, ExternalLink, Send, CalendarDays, ChevronDown } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const CALENDLY_LINK = "https://calendly.com/ajjosol18/discovery-call"; // Replace this with your actual Calendly booking URL

const PROJECT_TYPES = [
  "Zapier Automation",
  "Web Development",
  "Virtual Assistance",
  "AI Workflow / Prompt Engineering",
  "Discovery / Strategy Call",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    subject: "",
    message: "",
  });

  const calendlyDomain = typeof window !== "undefined" ? window.location.hostname : "calendly.com";
  const calendlyIframeSrc = `${CALENDLY_LINK}?embed_domain=${encodeURIComponent(calendlyDomain)}&embed_type=Inline`;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.projectType} inquiry${form.subject ? ` — ${form.subject}` : ``}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\nProject type: ${form.projectType}\n\n— ${form.name} (${form.email})`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ajjosol18@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setForm({
      name: "",
      email: "",
      projectType: PROJECT_TYPES[0],
      subject: "",
      message: "",
    });
  };

  const contacts = [
    { icon: CalendarDays, label: "Discovery call", value: "Book on Calendly", href: CALENDLY_LINK },
    { icon: Mail,         label: "Email",         value: "ajjosol18@gmail.com",                     href: "mailto:ajjosol18@gmail.com" },
    { icon: Phone,        label: "Phone",         value: "0993 878 9620",                           href: "tel:09938789620" },
    { icon: MapPin,       label: "Location",      value: "Tultugan, Calape, Bohol",                 href: "#" },
    { icon: ExternalLink, label: "LinkedIn",     value: "linkedin.com/in/aj-josol",                href: "https://www.linkedin.com/in/aj-josol-93836a36a/" },
    { icon: Globe,        label: "OnlineJobs.ph", value: "View my VA profile",                      href: "https://v2.onlinejobs.ph/jobseekers/info/4245030" },
    { icon: Code2,        label: "GitHub",        value: "@whoiszen",                               href: "https://github.com/whoiszen" },
  ];

  return (
    <section id="contact" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          subtitle="Whether you need a Zapier automation, an AI-powered workflow, or a reliable VA — I'm ready to help."
        />

        <div className="grid gap-6 lg:grid-cols-5">

          {/* Contact cards + booking */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div
                className="rounded-3xl p-5"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.10)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Reach me
                </p>
                <h3 className="mt-3 text-2xl font-extrabold">
                  Quick contact
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Use one of the quick links below, or book a free discovery call directly from the embedded scheduler.
                </p>
              </div>

              <div className="space-y-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "oklch(1 0 0 / 0.06)",
                      border: "1px solid oklch(1 0 0 / 0.10)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.78 0.16 80 / 0.30)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(1 0 0 / 0.10)";
                    }}
                  >
                    <div
                      className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl"
                      style={{ background: "oklch(0.78 0.16 80 / 0.10)" }}
                    >
                      <c.icon size={18} style={{ color: "var(--gold)" }} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="truncate text-sm font-medium text-foreground">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="overflow-hidden rounded-3xl border p-4"
                style={{
                  background: "oklch(0.07 0.01 265 / 0.85)",
                  borderColor: "oklch(1 0 0 / 0.12)",
                }}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Schedule a call
                    </p>
                    <h4 className="mt-2 text-lg font-semibold">Discovery call</h4>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <iframe
                    title="Calendly booking"
                    src={calendlyIframeSrc}
                    className="h-[560px] w-full border-0"
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div
              className="h-full rounded-3xl p-6 sm:p-8"
              style={{
                background: "oklch(0.05 0.01 265 / 0.92)",
                border: "1px solid oklch(1 0 0 / 0.10)",
                boxShadow: "0 24px 80px -40px oklch(0.78 0.16 80 / 0.30)",
              }}
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Start your project
                </p>
                <h3 className="mt-3 text-3xl font-extrabold tracking-tight">
                  Send your brief
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Share the essentials and I’ll respond within the same business day. If you need a call first, use the Calendly scheduler to the left.
                </p>
              </div>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="pf-input"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="pf-input"
                    />
                  </Field>
                </div>

                <Field label="Project type">
                  <div className="relative">
                    <select
                      required
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="pf-input pf-select"
                    >
                      {PROJECT_TYPES.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                  </div>
                </Field>

                <Field label="Subject">
                  <input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Short project summary"
                    className="pf-input"
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or idea…"
                    className="pf-input resize-none"
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-bold transition-all hover:scale-[1.03]"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "oklch(0.10 0.01 265)",
                      boxShadow: "var(--shadow-glow)",
                    }}
                  >
                    Send Message <Send size={15} />
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Opens Gmail compose in a new tab. For faster scheduling, use the embedded call widget on the left.
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .pf-input {
          margin-top: 0.5rem;
          width: 100%;
          border-radius: 0.75rem;
          background: oklch(0.14 0.01 265 / 0.18);
          border: 1px solid oklch(1 0 0 / 0.16);
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          outline: none;
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: all 0.2s ease;
          appearance: none;
        }
        .pf-input:focus {
          border-color: oklch(0.78 0.16 80 / 0.50);
          box-shadow: 0 0 0 3px oklch(0.78 0.16 80 / 0.16);
          background: oklch(0.13 0.01 265 / 0.22);
        }
        .pf-select {
          padding-right: 3rem;
          background: oklch(0.14 0.01 265 / 0.22);
          color: var(--foreground);
        }
        .pf-select option {
          background: oklch(0.08 0.01 265 / 0.98);
          color: var(--foreground);
        }
        .pf-input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </section>
  );
}

function Field({
  label, children, className = "",
}: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: "var(--gold-dim)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
