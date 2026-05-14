import { Reveal, SectionHeading } from "./Reveal";
import { MapPin, GraduationCap } from "lucide-react";

const FACTS = [
  { icon: MapPin,         text: "Bohol, Philippines" },
  { icon: GraduationCap, text: "BS Information Technology — Mater Dei College" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About" title="Who I Am" />

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.16 80 / 0.18), oklch(0.68 0.18 55 / 0.10))",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{ border: "1px solid oklch(0.78 0.16 80 / 0.20)" }}
              >
                <img
                  src="/profile/profile-main.png"
                  alt="AJ P. Josol — portrait"
                  className="aspect-[4/5] w-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div
                  className="aspect-[4/5] w-full items-center justify-center font-display text-8xl font-extrabold"
                  style={{ background: "var(--surface)", color: "var(--gold)", display: "none" }}
                >
                  AJ
                </div>
              </div>

              {/* Fact pills overlaid at bottom */}
              <div className="mt-4 flex flex-col gap-2">
                {FACTS.map((f) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5"
                    style={{
                      background: "oklch(1 0 0 / 0.04)",
                      border: "1px solid oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <f.icon size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    <span className="text-xs text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm{" "}
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  AJ Josol
                </span>
                , a tech-savvy Virtual Assistant and AI-powered developer based in
                Bohol, Philippines. I combine strong administrative skills with modern
                automation and development practices to help businesses run smarter — not harder.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                My work sits at the intersection of automation, AI tools, and web development.
                I build{" "}
                <span style={{ color: "var(--foreground)" }}>Zapier pipelines</span>{" "}
                that replace hours of manual work, craft AI-powered systems using{" "}
                <span style={{ color: "var(--foreground)" }}>OpenAI</span>, and develop
                full-stack applications using{" "}
                <span style={{ color: "var(--foreground)" }}>Laravel and Vue.js</span>.
              </p>

              <p
                className="mt-5 text-base font-semibold sm:text-lg"
                style={{ color: "var(--gold)" }}
              >
                "Every repetitive task is an automation waiting to happen."
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn",       href: "https://www.linkedin.com/in/aj-josol-93836a36a/" },
                  { label: "OnlineJobs.ph",  href: "https://v2.onlinejobs.ph/jobseekers/info/4245030" },
                  { label: "GitHub",         href: "https://github.com/whoiszen" },
                  { label: "Canva Portfolio", href: "https://ajjosol.my.canva.site/" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-4 py-1.5 text-xs font-semibold transition-all hover:scale-105"
                    style={{
                      background: "oklch(0.78 0.16 80 / 0.08)",
                      border: "1px solid oklch(0.78 0.16 80 / 0.22)",
                      color: "var(--gold)",
                    }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
