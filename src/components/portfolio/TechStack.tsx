import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Sparkles,
  Terminal,
  Code2,
  Layers,
  Database,
  Globe,
  MessageSquare,
  Link,
  Send,
  Box,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const TOOLS = [
  { name: "Zapier", icon: Zap, color: "#FF4A00" },
  { name: "OpenAI", icon: Sparkles, color: "#000000" },
  { name: "Prompt Engineering", icon: Terminal, color: "#7C3AED" },
  { name: "Vibe Coding", icon: Code2, color: "#38BDF8" },
  { name: "Laravel", icon: Layers, color: "#FB503B" },
  { name: "Vue.js", icon: Code2, color: "#41B883" },
  { name: "Google Workspace", icon: Globe, color: "#4285F4" },
  { name: "Airtable", icon: Database, color: "#1A9CFC" },
  { name: "Slack", icon: MessageSquare, color: "#4A154B" },
  { name: "Typeform", icon: Box, color: "#000000" },
  { name: "Webhooks", icon: Link, color: "#EA4335" },
  { name: "Postman", icon: Send, color: "#FF6C37" },
];

export function TechStack() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let currentScroll = 0;

    const animate = () => {
      currentScroll += 0.5;
      // Reset scroll when reaching end for seamless loop
      if (currentScroll >= container.scrollWidth / 2) {
        currentScroll = 0;
      }
      setScrollPosition(currentScroll);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate items for seamless infinite scroll
  const duplicatedTools = [...TOOLS, ...TOOLS];

  return (
    <section className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Stack"
          title="Technology & Tools"
          subtitle="The platforms and tools I use to build automation workflows, AI systems, and scalable applications."
        />

        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl py-12"
            style={{
              background: "linear-gradient(90deg, oklch(0.17 0.015 265), oklch(0.19 0.015 265))",
              border: "1px solid oklch(1 0 0 / 0.08)",
            }}
          >
            {/* Gradient overlays for fade effect */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
              style={{
                background: "linear-gradient(90deg, oklch(0.17 0.015 265), transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
              style={{
                background: "linear-gradient(90deg, transparent, oklch(0.17 0.015 265))",
              }}
            />

            {/* Scrolling container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 px-12"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
              }}
            >
              {duplicatedTools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={`${tool.name}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    className="inline-flex flex-shrink-0 items-center gap-3 rounded-full border px-5 py-3 transition-all hover:scale-110"
                    style={{
                      background: "oklch(1 0 0 / 0.08)",
                      borderColor: "oklch(0.78 0.16 80 / 0.25)",
                      color: "var(--gold)",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(0.78 0.16 80 / 0.16)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.78 0.16 80 / 0.50)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "var(--shadow-glow)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "oklch(1 0 0 / 0.08)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.78 0.16 80 / 0.25)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full"
                      style={{
                        background: `${tool.color}22`,
                        color: tool.color,
                        boxShadow: `0 0 0 1px ${tool.color}22`,
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <span>{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
