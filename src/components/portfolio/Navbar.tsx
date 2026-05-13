import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#services",   label: "Services"   },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#contact",    label: "Contact"    },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "oklch(0.13 0.015 265 / 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(1 0 0 / 0.07)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-xl font-extrabold tracking-tight"
            style={{ color: "var(--gold)", letterSpacing: "-0.03em" }}
          >
            AJ<span style={{ color: "var(--foreground)", opacity: 0.5 }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{
                  color:
                    activeSection === l.href.slice(1)
                      ? "var(--gold)"
                      : "var(--muted-foreground)",
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hire me CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all hover:scale-105"
              style={{
                background: "var(--gradient-primary)",
                color: "oklch(0.10 0.01 265)",
                boxShadow: "var(--shadow-glow)",
                fontFamily: "var(--font-display)",
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: "var(--gold)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20"
          style={{ background: "oklch(0.13 0.015 265 / 0.97)", backdropFilter: "blur(18px)" }}
        >
          <nav className="flex flex-col items-center gap-8 py-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl font-bold transition-colors"
                style={{
                  color:
                    activeSection === l.href.slice(1)
                      ? "var(--gold)"
                      : "var(--foreground)",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full px-8 py-3 text-base font-bold"
              style={{
                background: "var(--gradient-primary)",
                color: "oklch(0.10 0.01 265)",
                fontFamily: "var(--font-display)",
              }}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
