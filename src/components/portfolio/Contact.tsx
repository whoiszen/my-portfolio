import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Code2, Globe, ExternalLink, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`);
    const body    = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ajjosol18@gmail.com?subject=${subject}&body=${body}`;
  };

  const contacts = [
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

          {/* Contact cards */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "oklch(1 0 0 / 0.04)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
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
                  <div
                    className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl"
                    style={{ background: "oklch(0.78 0.16 80 / 0.10)" }}
                  >
                    <c.icon size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="truncate text-sm font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl p-6 sm:p-8"
              style={{
                background: "oklch(1 0 0 / 0.04)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
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

              <Field label="Subject" className="mt-5">
                <input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Project, automation, or role"
                  className="pf-input"
                />
              </Field>

              <Field label="Message" className="mt-5">
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or idea…"
                  className="pf-input resize-none"
                />
              </Field>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-bold transition-all hover:scale-[1.03]"
                style={{
                  background: "var(--gradient-primary)",
                  color: "oklch(0.10 0.01 265)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <style>{`
        .pf-input {
          margin-top: 0.5rem;
          width: 100%;
          border-radius: 0.75rem;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid oklch(1 0 0 / 0.10);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
          color: var(--foreground);
          font-family: var(--font-sans);
          transition: all 0.2s ease;
        }
        .pf-input:focus {
          border-color: oklch(0.78 0.16 80 / 0.50);
          box-shadow: 0 0 0 3px oklch(0.78 0.16 80 / 0.12);
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
