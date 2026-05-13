import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light") {
        setIsLight(true);
        document.documentElement.classList.add("light");
      } else if (stored === "dark") {
        setIsLight(false);
        document.documentElement.classList.remove("light");
      } else {
        // Default to dark mode
        setIsLight(false);
        document.documentElement.classList.remove("light");
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full glass transition-all hover:scale-110 hover:text-[var(--electric)]"
    >
      <span
        key={isLight ? "sun" : "moon"}
        className="inline-flex animate-in fade-in spin-in-90 duration-300"
      >
        {isLight ? <Sun size={16} /> : <Moon size={16} />}
      </span>
    </button>
  );
}
