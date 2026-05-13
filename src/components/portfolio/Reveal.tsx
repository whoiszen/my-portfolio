import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isLeft = align === "left";
  return (
    <Reveal className={`mb-14 ${isLeft ? "" : "mx-auto max-w-2xl text-center"}`}>
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
        style={{
          background: "oklch(0.78 0.16 80 / 0.12)",
          color: "var(--gold)",
          border: "1px solid oklch(0.78 0.16 80 / 0.25)",
        }}
      >
        <span
          className="inline-block h-1 w-4 rounded-full"
          style={{ background: "var(--gold)" }}
        />
        {eyebrow}
      </span>
      <h2
        className="mt-4 font-display text-4xl font-extrabold sm:text-5xl"
        style={{ letterSpacing: "-0.03em" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
