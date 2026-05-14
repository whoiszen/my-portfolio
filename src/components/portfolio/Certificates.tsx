import { Award } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const certificates = [
  {
    title: "Social Media Marketing Certificate",
    image: "/certificates/smm-certificate.png",
    issuer: "SMM VC Social Pro",
    date: "2025",
  },
  {
    title: "Zapier Automation Certificate",
    image: "/certificates/zapier-automation-certificate.png",
    issuer: "Technical Vitual Assistant",
    date: "2026",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Certifications"
          subtitle="Demonstrating expertise through recognized training and certifications in automation and digital marketing."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.1}>
              <div
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
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
                <div className="flex items-start gap-6">
                  <div
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl"
                    style={{
                      background: "var(--gradient-primary)",
                    }}
                  >
                    <Award
                      size={24}
                      style={{
                        color: "oklch(0.10 0.01 265)",
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-extrabold leading-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Issued by {cert.issuer}
                    </p>
                    <div
                      className="mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "oklch(0.78 0.16 80 / 0.10)",
                        color: "var(--gold)",
                        border: "1px solid oklch(0.78 0.16 80 / 0.20)",
                      }}
                    >
                      {cert.date}
                    </div>
                  </div>
                </div>

                <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}