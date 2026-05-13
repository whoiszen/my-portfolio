import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  {
    school: "Mater Dei College",
    degree: "Bachelor of Science in Information Technology",
    period: "2023 – Present",
    current: true,
  },
  {
    school: "Saint Teresa Academy Inc.",
    degree: "High School Diploma",
    period: "Graduated 2023",
    current: false,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28 section-divider">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Education" title="Academic Background" />

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.school} delay={i * 0.1}>
              <div
                className="flex h-full items-start gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: it.current
                    ? "1px solid oklch(0.78 0.16 80 / 0.30)"
                    : "1px solid oklch(1 0 0 / 0.08)",
                  boxShadow: it.current ? "var(--shadow-glow)" : "var(--shadow-elegant)",
                }}
              >
                <div
                  className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl"
                  style={{
                    background: it.current
                      ? "var(--gradient-primary)"
                      : "oklch(0.78 0.16 80 / 0.10)",
                  }}
                >
                  <GraduationCap
                    size={20}
                    style={{
                      color: it.current ? "oklch(0.10 0.01 265)" : "var(--gold)",
                    }}
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold">{it.school}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.degree}</p>
                  <div
                    className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: "oklch(0.78 0.16 80 / 0.10)",
                      color: "var(--gold)",
                      border: "1px solid oklch(0.78 0.16 80 / 0.20)",
                    }}
                  >
                    {it.period}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
