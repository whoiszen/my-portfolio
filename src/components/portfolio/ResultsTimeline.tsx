import { Inbox, Sparkles, GitBranch, Zap, Bell } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { icon: Inbox, label: "Trigger", desc: "Data enters the system" },
  { icon: Sparkles, label: "Enrich", desc: "Cleaned, formatted, scored" },
  { icon: GitBranch, label: "Route", desc: "Logic decides what's next" },
  { icon: Zap, label: "Act", desc: "Emails, records, folders" },
  { icon: Bell, label: "Notify", desc: "Team is alerted instantly" },
];

export function ResultsTimeline() {
  return (
    <section id="timeline" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="How It Works"
          title="How My Automations Work"
          subtitle="Every project follows the same principle: data in → intelligence applied → action taken → team notified."
        />

        <Reveal>
          <div className="relative rounded-3xl glass-strong p-8 sm:p-12">
            {/* Desktop horizontal timeline */}
            <div className="relative hidden md:block">
              <div className="absolute left-[8%] right-[8%] top-7 h-px origin-left bg-gradient-to-r from-[var(--electric)] via-[var(--violet)] to-[var(--electric)] animate-[draw-line_1.6s_ease-out_forwards]" />
              <div className="relative grid grid-cols-5 gap-4">
                {STEPS.map((s, i) => (
                  <div key={s.label} className="flex flex-col items-center text-center" style={{ animation: `fade-in 0.5s ease-out ${i * 150}ms both` }}>
                    <div className="relative grid h-14 w-14 place-items-center rounded-full gradient-bg text-primary-foreground glow ring-4 ring-background">
                      <s.icon size={22} />
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[var(--electric)]">
                      Step {i + 1}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold">{s.label}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden">
              <div className="absolute left-10 top-12 bottom-12 w-px bg-gradient-to-b from-[var(--electric)] to-[var(--violet)]" />
              <div className="space-y-6">
                {STEPS.map((s, i) => (
                  <div key={s.label} className="relative flex items-start gap-4">
                    <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full gradient-bg text-primary-foreground ring-4 ring-background">
                      <s.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--electric)]">
                        Step {i + 1}
                      </div>
                      <div className="font-display text-lg font-bold">{s.label}</div>
                      <div className="text-sm text-muted-foreground">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
