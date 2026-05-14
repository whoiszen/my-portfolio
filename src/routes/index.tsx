import { createFileRoute } from "@tanstack/react-router";
import { Navbar }     from "@/components/portfolio/Navbar";
import { Hero }       from "@/components/portfolio/Hero";
import { About }      from "@/components/portfolio/About";
import { TechStack }  from "@/components/portfolio/TechStack";
import { Skills }     from "@/components/portfolio/Skills";
import { Services }   from "@/components/portfolio/Services";
import { Projects }   from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education }  from "@/components/portfolio/Education";
import { Contact }    from "@/components/portfolio/Contact";
import { Footer }     from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AJ P. Josol — Zapier Automation Expert & AI-Powered Developer" },
      {
        name: "description",
        content:
          "AJ P. Josol — Zapier automation specialist, AI-powered developer, and virtual assistant from Bohol, Philippines. Smart workflows that save businesses hours every week.",
      },
      { property: "og:title",       content: "AJ P. Josol — Portfolio" },
      { property: "og:description", content: "Smart automations and AI-powered systems that save businesses hours every week." },
      { name: "theme-color",        content: "#0c0f1a" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
