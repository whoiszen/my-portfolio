import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ROLES = [
  "Zapier Automation Expert",
  "AI-Powered Developer",
  "Virtual Assistant",
  "Prompt Engineer",
];

function useTyping(words: string[]) {
  const [i, setI]     = useState(0);
  const [text, setText] = useState("");
  const [del, setDel]   = useState(false);

  useEffect(() => {
    const word  = words[i];
    const speed = del ? 36 : 72;
    const t = setTimeout(() => {
      const next = del
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1600);
      else if (del && next === "") {
        setDel(false);
        setI((p) => (p + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur   = 1600;
        const tick  = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function Hero() {
  const typed = useTyping(useMemo(() => ROLES, []));

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Gold ambient blobs */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full animate-float"
        style={{ background: "oklch(0.78 0.16 80 / 0.08)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full animate-float"
        style={{
          background: "oklch(0.68 0.18 55 / 0.06)",
          filter: "blur(80px)",
          animationDelay: "3s",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pt-28 pb-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Available badge */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{
              background: "oklch(0.78 0.16 80 / 0.10)",
              border: "1px solid oklch(0.78 0.16 80 / 0.22)",
              color: "var(--gold)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#4ade80", boxShadow: "0 0 6px #4ade80" }}
            />
            Available for freelance & remote work
          </span>

          {/* Name */}
          <h1
            className="mt-6 font-display text-5xl font-extrabold leading-[1.0] sm:text-6xl lg:text-7xl"
            style={{ letterSpacing: "-0.035em" }}
          >
            Hi, I'm{" "}
            <span className="shimmer-text">AJ Josol</span>.
          </h1>

          {/* Typing role */}
          <div
            className="mt-5 font-display text-xl font-bold sm:text-2xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span style={{ color: "var(--gold)" }}>{typed}</span>
            <span
              style={{
                color: "var(--gold)",
                marginLeft: "2px",
                animation: "blink 1s steps(1) infinite",
                display: "inline-block",
              }}
            >
              |
            </span>
          </div>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build smart automations and AI-powered systems that save businesses
            hours every week — so they can focus on what actually matters.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-sm font-bold transition-all hover:scale-105"
              style={{
                background: "var(--gradient-primary)",
                color: "oklch(0.10 0.01 265)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 font-display text-sm font-bold transition-all"
              style={{
                border: "1px solid oklch(0.78 0.16 80 / 0.35)",
                color: "var(--gold)",
                background: "oklch(0.78 0.16 80 / 0.06)",
              }}
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4">
            {[
              { n: 5,    suf: "+",  label: "Pipelines Built" },
              { n: 5000, suf: "+",  label: "Client Value ($)" },
              { n: 60,   suf: "s",  label: "Avg. Trigger" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "oklch(1 0 0 / 0.04)",
                  border: "1px solid oklch(1 0 0 / 0.08)",
                }}
              >
                <div
                  className="font-display text-lg font-extrabold sm:text-2xl"
                  style={{ color: "var(--gold)" }}
                >
                  <CountUp to={s.n} suffix={s.suf} />
                </div>
                <div className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-40 animate-float"
              style={{
                background: "conic-gradient(from 0deg, var(--gold), oklch(0.68 0.18 55), transparent, var(--gold))",
                filter: "blur(12px)",
                animationDelay: "1s",
              }}
            />
            {/* Photo circle */}
            <div
              className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80"
              style={{
                border: "2px solid oklch(0.78 0.16 80 / 0.40)",
                boxShadow: "0 0 60px -10px oklch(0.78 0.16 80 / 0.30)",
              }}
            >
              <img
                src="/profile/profile.png"
                alt="AJ P. Josol"
                className="h-full w-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = "flex";
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center font-display text-7xl font-extrabold"
                style={{
                  background: "oklch(0.17 0.015 265)",
                  color: "var(--gold)",
                  display: "none",
                }}
              >
                AJ
              </div>
            </div>

            {/* Floating badge — available */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold"
              style={{
                background: "var(--gradient-primary)",
                color: "oklch(0.10 0.01 265)",
                fontFamily: "var(--font-display)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              Open to Work
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}
