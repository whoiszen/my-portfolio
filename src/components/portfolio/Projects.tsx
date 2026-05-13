import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

type Project = {
  id: string;
  image: string | string[];
  title: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  steps: string[];
  tools: { tool: string; purpose: string }[];
  timeline: string[];
  value: string;
  category: "automation" | "webdev";
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    image: "/automation/zapier/zap-realestate.png",
    category: "automation",
    title: "Real Estate Lead Routing & Auto-Response",
    description:
      "Automated lead intake with instant replies and smart routing to the agent based on lead priority.",
    tags: ["Typeform", "Gmail", "Google Sheets", "Slack", "Paths"],
    problem:
      "A real estate agent loses hot leads because follow-ups are done manually — one by one, with no system.",
    solution:
      "A single Zap captures Typeform leads, sends an instant Gmail reply referencing their budget, logs to a Google Sheets CRM, and routes Slack alerts — DM for hot leads (>$500k), channel message for standard.",
    steps: [
      "Typeform trigger captures new lead submission",
      "Gmail sends auto-reply referencing the lead's budget",
      "Google Sheets CRM is updated with the new lead row",
      "Paths step checks budget threshold ($500k+)",
      "Hot lead → Slack DM to agent · Standard → Slack channel post",
    ],
    tools: [
      { tool: "Typeform",         purpose: "Lead form trigger" },
      { tool: "Gmail",            purpose: "Auto-reply" },
      { tool: "Google Sheets",    purpose: "CRM" },
      { tool: "Slack",            purpose: "Agent alerts" },
      { tool: "Paths by Zapier",  purpose: "Conditional routing" },
    ],
    timeline: ["Lead Submits", "Zap Fires", "Email Sent", "CRM Updated", "Agent Notified"],
    value: "$150 – $400 per project",
  },
  {
    id: "p2",
    image: "/automation/zapier/zap-ecommerce.png",
    category: "automation",
    title: "E-commerce Order → Support Automation",
    description:
      "Full order intake pipeline with customer confirmation, CRM logging, and VIP order alerts.",
    tags: ["Google Forms", "Gmail", "Google Sheets", "Slack", "Filter"],
    problem:
      "Store owner manually confirms orders, copies them to a spreadsheet, and checks for high-value orders — 2–3 hours daily.",
    solution:
      "Order form triggers an instant Gmail confirmation, logs the order to Sheets with status NEW, then a Filter gates a VIP Slack alert to orders above $200 only.",
    steps: [
      "Google Forms trigger fires on each new order",
      "Sheets row created with status NEW",
      "Gmail sends confirmation to the customer",
      "Filter step gates orders ≥ $200",
      "Slack alert posted to #vip-orders for VIPs",
    ],
    tools: [
      { tool: "Google Forms",    purpose: "Order trigger" },
      { tool: "Google Sheets",   purpose: "CRM" },
      { tool: "Gmail",           purpose: "Customer confirmation" },
      { tool: "Filter by Zapier", purpose: "VIP gate" },
      { tool: "Slack",           purpose: "VIP alert" },
    ],
    timeline: ["Order Placed", "CRM Logged", "Customer Notified", "Filter Check", "VIP Alerted"],
    value: "$200 – $500 per project",
  },
  {
    id: "p3",
    image: "/automation/zapier/zap-coaching.png",
    category: "automation",
    title: "Coaching Client Onboarding Pipeline",
    description:
      "Four-action onboarding system — welcome email, Drive folder creation, CRM update, and coach notification.",
    tags: ["Google Forms", "Gmail", "Google Drive", "Sheets", "Slack"],
    problem:
      "Coach spends 20–30 minutes per new client manually emailing, creating folders, and logging contacts — and often forgets steps.",
    solution:
      "Intake form triggers 4 sequential actions — welcome email, auto-created Drive folder, CRM row updated with folder link, and Slack notification with a clickable Drive link.",
    steps: [
      "Google Forms intake form triggers the Zap",
      "Gmail sends a personalized welcome email",
      "Google Drive folder is auto-created for the client",
      "Sheets CRM updated with the folder link",
      "Slack alert sent to coach with clickable Drive link",
    ],
    tools: [
      { tool: "Google Forms",  purpose: "Intake trigger" },
      { tool: "Gmail",         purpose: "Welcome email" },
      { tool: "Google Drive",  purpose: "Folder creation" },
      { tool: "Google Sheets", purpose: "CRM" },
      { tool: "Slack",         purpose: "Coach alert" },
    ],
    timeline: ["Form Submitted", "Email Sent", "Folder Created", "CRM Updated", "Coach Notified"],
    value: "$300 – $600 per project",
  },
  {
    id: "p4",
    image: "/automation/zapier/zap-content.png",
    category: "automation",
    title: "AI-Powered Lead Follow-Up System",
    description:
      "New leads trigger OpenAI to generate a personalized outreach email, sent automatically within 60 seconds.",
    tags: ["Typeform", "OpenAI", "Gmail", "Google Sheets", "Slack"],
    problem:
      "Agency sends generic copy-paste follow-up emails to new leads. Open rates are low and leads go cold fast.",
    solution:
      "New lead submission triggers OpenAI (GPT-4o-mini) to generate a personalized email referencing the lead's industry, business name, and challenge — sent via Gmail automatically in under 60 seconds.",
    steps: [
      "Typeform trigger captures new lead",
      "Sheets logs lead with status NEW/PENDING",
      "OpenAI GPT-4o-mini generates personalized email",
      "Gmail sends the AI-generated email",
      "Sheets updated to CONTACTED/SENT",
      "Slack sales alert posted with copy of the email",
    ],
    tools: [
      { tool: "Typeform",            purpose: "Lead form" },
      { tool: "OpenAI GPT-4o-mini",  purpose: "Email generation" },
      { tool: "Gmail",               purpose: "Send" },
      { tool: "Google Sheets",       purpose: "CRM" },
      { tool: "Slack",               purpose: "Team alert" },
    ],
    timeline: ["Lead Submits", "CRM Tagged", "AI Generates", "Email Sent", "CRM Updated", "Team Notified"],
    value: "$800 – $2,500 per project",
  },
  {
    id: "p5",
    image: ["/automation/zapier/lead-score-full-crm/lsfc1.png", "/automation/zapier/lead-score-full-crm/lsfc2.png", "/automation/zapier/lead-score-full-crm/lsfc3.png"],
    category: "automation",
    title: "Full Sales CRM Pipeline — Capstone",
    description:
      "Webhook-triggered pipeline scores leads automatically and routes them into Hot, Warm, or Cold sequences with AI outreach.",
    tags: ["Webhooks", "Postman", "Formatter", "Paths", "OpenAI", "Airtable", "Gmail", "Slack"],
    problem:
      "Sales ops manually scores, sorts, and routes every incoming lead — taking 4–6 hours per day with no consistency.",
    solution:
      "Webhook receives JSON lead data. Five Formatter steps calculate a lead score. Paths routes to 3 sequences — Hot (≥60): AI email + Slack DM; Warm (30–59): nurture email + channel alert; Cold (<30): Airtable archive only.",
    steps: [
      "Webhook receives JSON lead payload",
      "5× Formatter steps compute the lead score",
      "Paths assigns Hot / Warm / Cold sequence",
      "Hot → Airtable + OpenAI email + Slack DM",
      "Warm → Airtable + nurture email + Slack channel",
      "Cold → Airtable archive + Slack log",
    ],
    tools: [
      { tool: "Webhooks by Zapier", purpose: "Trigger" },
      { tool: "Postman",            purpose: "Payload testing" },
      { tool: "Formatter ×5",       purpose: "Scoring engine" },
      { tool: "Paths by Zapier",    purpose: "Routing" },
      { tool: "OpenAI",             purpose: "AI email" },
      { tool: "Airtable",           purpose: "CRM" },
      { tool: "Gmail",              purpose: "Outreach" },
      { tool: "Slack",              purpose: "Alerts" },
    ],
    timeline: ["Lead Arrives", "Score Calculated", "Path Assigned", "CRM Created", "Outreach Sent", "Team Notified"],
    value: "$2,000 – $5,000 per project",
  },
  {
    id: "p6",
    image: "/automation/zapier/zap-asana-crm.png",
    category: "automation",
    title: "Zapier Expert for Asana CRM Automation",
    description:
      "Streamline CRM processes in Asana with five key automations for improved workflow efficiency and consistent communication.",
    tags: ["Asana", "Zapier", "Gmail", "Google Drive", "Automation"],
    problem:
      "Manual CRM processes in Asana lead to inefficiencies, forgotten tasks, and inconsistent follow-ups with leads.",
    solution:
      "Implement five automations: folder creation and subtask for new leads, follow-up for unresponsive leads, quote follow-ups, welcome emails for approvals, and service recommendation emails for closed deals.",
    steps: [
      "Folder Creation and Subtask Automation: Trigger on 'Ready to Start' column, create Google Drive folder, add 'Social Media Content' subtask with folder link.",
      "Follow-Up Automation for Unresponsive Leads: Trigger on 'No Response' column, send escalating follow-up texts/emails until response.",
      "Quote Follow-Up Automation: Trigger on 'Quoted' column, send weekly follow-up texts/emails.",
      "Welcome Email Automation: Trigger on 'Approved' column, send personalized welcome email with PDF attachment.",
      "Service Recommendation Email Automation: Trigger on 'Paid and Closed' column, send recommendation email with variations based on service type.",
    ],
    tools: [
      { tool: "Asana", purpose: "CRM and task management" },
      { tool: "Zapier", purpose: "Automation platform" },
      { tool: "Gmail", purpose: "Email sending" },
      { tool: "Google Drive", purpose: "Folder creation" },
      { tool: "Paths by Zapier", purpose: "Conditional logic" },
    ],
    timeline: ["Lead Moves to Column", "Automation Triggers", "Actions Execute", "Notifications Sent", "CRM Updated"],
    value: "$500 – $1,200 per project",
  },
  {
    id: "wd1",
    image: ["/webdev/focus-flow/landing-hero.png", "/webdev/focus-flow/focus-timer.png", "/webdev/focus-flow/task-board.png", "/webdev/focus-flow/stats-dashboard.png"],
    category: "webdev",
    title: "FocusFlow - Productivity Tracker",
    description:
      "A single-page focus tracker combining Pomodoro timer, task board, ambient video zone, and stats dashboard for deep work sessions.",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "YouTube API", "LocalStorage"],
    problem:
      "Users struggle to maintain productivity without a cohesive tool that tracks focus sessions, tasks, and progress in one place.",
    solution:
      "Built a polished productivity interface with event-driven programming: hero section, customizable Pomodoro timer, task management with validation, ambient rest zone, and comprehensive stats dashboard.",
    steps: [
      "Hero section with animated loading and live counters",
      "Pomodoro timer with phases, controls, and keyboard shortcuts",
      "Task board with category selection, priority levels, and filters",
      "Ambient video zone with YouTube API integration",
      "Stats dashboard tracking sessions, focused minutes, and history",
    ],
    tools: [
      { tool: "HTML5", purpose: "Semantic page structure" },
      { tool: "CSS3", purpose: "Responsive glass-style UI" },
      { tool: "Vanilla JavaScript", purpose: "State management and DOM rendering" },
      { tool: "YouTube IFrame API", purpose: "Ambient video integration" },
      { tool: "Browser LocalStorage", purpose: "Client-side persistence" },
    ],
    timeline: ["Load State", "Render UI", "Handle Events", "Update Stats", "Persist Data"],
    value: "Portfolio showcase of event-driven JavaScript",
  },
  {
    id: "wd2",
    image: ["/webdev/learnhub/01-home.png", "/webdev/learnhub/04-student-dashboard.png", "/webdev/learnhub/10-admin-dashboard.png", "/webdev/learnhub/13-admin-courses.png"],
    category: "webdev",
    title: "LearnHub - IT Learning Platform",
    description:
      "A Laravel + Vue learning hub aggregating Microsoft Learn, IBM SkillsBuild, and Cisco NetAcad courses with enrollment, progress tracking, and certificate generation.",
    tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "MySQL", "PDF Generation"],
    problem:
      "IT students and professionals need a centralized platform to discover, enroll, and track progress across multiple free certification courses.",
    solution:
      "Built a full-stack system with student catalog browsing, bookmarking, enrollment, screenshot evidence submission, admin evidence review, PDF certificate generation, and automated email notifications.",
    steps: [
      "Course catalog aggregation from multiple providers",
      "Student enrollment and progress tracking",
      "Screenshot evidence submission for verification",
      "Admin evidence review and approval workflow",
      "PDF certificate generation and email delivery",
      "Queued mail and scheduled jobs for notifications",
    ],
    tools: [
      { tool: "Laravel 11", purpose: "Backend framework and API" },
      { tool: "Vue 3 + Inertia.js", purpose: "Frontend SPA" },
      { tool: "Tailwind CSS", purpose: "Styling" },
      { tool: "MySQL", purpose: "Database" },
      { tool: "barryvdh/laravel-dompdf", purpose: "PDF generation" },
      { tool: "Laravel Mail + Queue", purpose: "Email notifications" },
    ],
    timeline: ["Browse Courses", "Enroll & Track", "Submit Evidence", "Review & Approve", "Generate Certificate"],
    value: "Full-stack Laravel + Vue capstone project",
  },
  {
    id: "wd3",
    image: ["/webdev/workhub/01-landing.png", "/webdev/workhub/02-jobs.png", "/webdev/workhub/06-client-dashboard.png", "/webdev/workhub/10-admin-dashboard.png"],
    category: "webdev",
    title: "WorkHub Marketplace",
    description:
      "A Laravel + Inertia marketplace connecting clients, freelancers, and admins through role-based workflows, job moderation, and responsive dashboards.",
    tags: ["Laravel", "Inertia.js", "Vue 3", "Tailwind CSS", "Marketplace"],
    problem:
      "Freelancers and clients need a secure marketplace with clear role workflows, approval gates, and easy job discovery.",
    solution:
      "Built a full-stack service marketplace with public job browsing, authenticated client job posting, freelancer applications, and admin moderation tools.",
    steps: [
      "Public job browsing and search",
      "Client job posting and submission",
      "Freelancer application workflows",
      "Admin approval and moderation",
      "Dashboard visibility for all user roles",
    ],
    tools: [
      { tool: "Laravel", purpose: "Backend domain logic" },
      { tool: "Vue 3 + Inertia.js", purpose: "Authenticated SPA experience" },
      { tool: "Tailwind CSS", purpose: "Responsive UI" },
      { tool: "Ziggy", purpose: "Laravel/Vue routing" },
      { tool: "Role middleware", purpose: "Access control" },
    ],
    timeline: ["Browse Jobs", "Post or Apply", "Admin Review", "Approve/Reject", "Workflows Active"],
    value: "Full-stack marketplace case study",
  },
  {
    id: "wd4",
    image: ["/webdev/accessories/landing.png", "/webdev/accessories/products.png", "/webdev/accessories/product-detail.png", "/webdev/accessories/cart-checkout.png"],
    category: "webdev",
    title: "Lumière Accessories E-Commerce",
    description:
      "A polished Laravel e-commerce storefront for fashion accessories, complete with product browsing, carts, orders, and user account flows.",
    tags: ["Laravel", "Tailwind CSS", "Laravel Breeze", "E-commerce", "Checkout"],
    problem:
      "Small retailers need a beautiful storefront and admin workflow for product, cart, and order management without complex enterprise overhead.",
    solution:
      "Built a responsive accessory shop with product listings, cart checkout, wishlist and order history, plus authenticated user dashboards.",
    steps: [
      "Beautiful landing page and product catalog",
      "Product detail and image gallery",
      "Cart checkout flow and order tracking",
      "Wishlist management and account pages",
      "Authenticated user dashboard with order status",
    ],
    tools: [
      { tool: "Laravel Breeze", purpose: "Authentication" },
      { tool: "Tailwind CSS", purpose: "Shop styling" },
      { tool: "Blade templates", purpose: "Page rendering" },
      { tool: "Cart workflows", purpose: "E-commerce experience" },
      { tool: "Order management", purpose: "Customer orders" },
    ],
    timeline: ["Discover Products", "Add to Cart", "Checkout", "View Orders", "Repeat Purchase"],
    value: "E-commerce frontend and admin experience",
  },
  {
    id: "wd5",
    image: ["/webdev/progrest-gym-tracker-system/03-user-dashboard.png", "/webdev/progrest-gym-tracker-system/04-missions.png", "/webdev/progrest-gym-tracker-system/06-reports.png", "/webdev/progrest-gym-tracker-system/09-admin-dashboard.png"],
    category: "webdev",
    title: "ProgRest - Gamified Gym Tracker",
    description:
      "A gamified fitness tracker built with Laravel that combines workout logging, XP progression, rank advancement, and weekly PDF report generation with admin oversight.",
    tags: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL", "PDF Generation", "Gamification"],
    problem:
      "Fitness tracking breaks down because users manage routines, progress photos, performance data, and motivation separately across multiple tools.",
    solution:
      "A mission-based workout tracker where users complete class paths, earn XP, climb ranks, upload session photos, and receive weekly progress reports with downloadable PDFs and mobile views.",
    steps: [
      "User selects preset class path or builds custom routine",
      "Timed mission-style workout session with active progress",
      "Log set-level performance and upload completion photos",
      "Earn XP and climb rank progression (E through SSS)",
      "Generate weekly reports with PDF, QR codes, and email delivery",
      "Admin dashboard for user oversight and engagement tracking",
    ],
    tools: [
      { tool: "Laravel 11", purpose: "Backend framework" },
      { tool: "Tailwind CSS", purpose: "Game-style UI design" },
      { tool: "Alpine.js", purpose: "Interactive components" },
      { tool: "MySQL", purpose: "Database" },
      { tool: "barryvdh/laravel-dompdf", purpose: "PDF report generation" },
      { tool: "simplesoftwareio/simple-qrcode", purpose: "QR code generation" },
    ],
    timeline: ["Select Path", "Complete Mission", "Log Progress", "Earn XP", "Generate Report"],
    value: "Full-stack gamified fitness platform",
  },
  {
    id: "wd6",
    image: ["/webdev/simple-inventory-system/05-admin-dashboard-cards.png", "/webdev/simple-inventory-system/06-admin-suppliers-table.png", "/webdev/simple-inventory-system/07-admin-products-table.png", "/webdev/simple-inventory-system/08-admin-inventory-table.png"],
    category: "webdev",
    title: "MyStore - Inventory Management System",
    description:
      "A Laravel + Vue inventory management system with public product catalog, supplier management, stock tracking, and low-stock visual indicators.",
    tags: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "SQLite", "CRUD"],
    problem:
      "Small businesses lack a lightweight way to organize suppliers, products, and inventory without adopting complex enterprise systems.",
    solution:
      "Built a streamlined inventory workflow with public product browsing, admin supplier and product management, stock tracking, and low-stock alerts.",
    steps: [
      "Public landing page with product-focused calls to action",
      "Public product catalog with search and pagination",
      "User authentication through Laravel Breeze",
      "Admin dashboard for supplier management",
      "Admin product CRUD with supplier assignment",
      "Inventory tracking with low-stock visual indicators",
    ],
    tools: [
      { tool: "Laravel 12", purpose: "Backend framework" },
      { tool: "Vue 3 + Inertia.js", purpose: "Frontend SPA" },
      { tool: "Tailwind CSS", purpose: "Responsive styling" },
      { tool: "SQLite", purpose: "Local database" },
      { tool: "Laravel Breeze", purpose: "Authentication" },
      { tool: "Laravel JSON API", purpose: "Public product endpoint" },
    ],
    timeline: ["Browse Products", "Admin Login", "Manage Suppliers", "Add Products", "Track Inventory"],
    value: "Full-stack inventory management platform",
  },
  {
    id: "wd7",
    image: ["/webdev/simple-pet-adoption-system/home.png", "/webdev/simple-pet-adoption-system/pets.png", "/webdev/simple-pet-adoption-system/adopters.png", "/webdev/simple-pet-adoption-system/adoptions.png"],
    category: "webdev",
    title: "PurrBabies - Pet Adoption System",
    description:
      "A Laravel-based shelter management system for tracking pets, adopters, and adoptions with data integrity rules and dashboard visibility.",
    tags: ["Laravel", "Bootstrap 5", "SQLite", "Eloquent ORM", "CRUD Workflows"],
    problem:
      "Shelter staff manage pet availability, adopter details, and adoption history across spreadsheets, losing context and causing duplicate work.",
    solution:
      "Centralized adoption workflow with pet records, adopter tracking, adoption logging, and data integrity rules preventing unsafe deletions.",
    steps: [
      "Dashboard with shelter statistics and featured available pets",
      "Paginated pet directory with adopter and adoption date details",
      "Adopter record management connected to adoption history",
      "Adoption creation workflow using available pets",
      "Data integrity rules guarding adopted pets and adopter deletions",
      "Recent adoptions list and engagement tracking",
    ],
    tools: [
      { tool: "Laravel 12", purpose: "Backend framework and routing" },
      { tool: "Bootstrap 5", purpose: "Responsive UI styling" },
      { tool: "Eloquent ORM", purpose: "Database relationships" },
      { tool: "SQLite", purpose: "Local database" },
      { tool: "Blade templates", purpose: "Page rendering" },
      { tool: "PHPUnit", purpose: "Testing" },
    ],
    timeline: ["View Pets", "Manage Adopters", "Record Adoption", "Track History", "Generate Reports"],
    value: "Full-stack shelter management platform",
  },
];

const FILTERS = ["All", "Automation", "Web Development"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter,  setFilter]  = useState<Filter>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const visible = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Automation") return p.category === "automation";
    if (filter === "Web Development") return p.category === "webdev";
    return true;
  });

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setOpenIdx(null);
      if (e.key === "ArrowRight")  setOpenIdx((i) => (i === null ? null : (i + 1) % PROJECTS.length));
      if (e.key === "ArrowLeft")   setOpenIdx((i) => (i === null ? null : (i - 1 + PROJECTS.length) % PROJECTS.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx]);

  const open = openIdx !== null ? PROJECTS[openIdx] : null;

  return (
    <section id="projects" className="relative py-28 section-divider">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          subtitle="Automation workflows and web development projects built from client needs and personal exploration."
        />

        {/* Filter pills */}
        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all hover:scale-105"
                style={
                  filter === f
                    ? {
                        background: "var(--gradient-primary)",
                        color: "oklch(0.10 0.01 265)",
                        boxShadow: "var(--shadow-glow)",
                      }
                    : {
                        background: "oklch(1 0 0 / 0.04)",
                        border: "1px solid oklch(1 0 0 / 0.10)",
                        color: "var(--muted-foreground)",
                      }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => {
              const idx = PROJECTS.indexOf(p);
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "oklch(1 0 0 / 0.04)",
                    border: "1px solid oklch(1 0 0 / 0.08)",
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
                  {/* Project Image */}
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <img
                      src={Array.isArray(p.image) ? p.image[0] : p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-4 inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.15em]" style={{ borderColor: "oklch(1 0 0 / 0.12)", color: "var(--gold)" }}>
                    {p.category === "automation" ? "Automation" : "Web Development"}
                  </div>

                  <h3 className="mt-4 font-display text-lg font-extrabold leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground"
                        style={{
                          background: "oklch(1 0 0 / 0.04)",
                          border: "1px solid oklch(1 0 0 / 0.08)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpenIdx(idx)}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-bold transition-transform hover:translate-x-1"
                    style={{ color: "var(--gold)" }}
                  >
                    View Case Study <ArrowRight size={14} />
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <ProjectModal
            key={open.id}
            project={open}
            onClose={() => setOpenIdx(null)}
            onPrev={() => setOpenIdx((i) => (i === null ? null : (i - 1 + PROJECTS.length) % PROJECTS.length))}
            onNext={() => setOpenIdx((i) => (i === null ? null : (i + 1) % PROJECTS.length))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({
  project, onClose, onPrev, onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev:  () => void;
  onNext:  () => void;
}) {
  const images = Array.isArray(project.image) ? project.image : [project.image];
  const [slide, setSlide] = useState(0);
  const currentImage = images[slide];

  const nextSlide = () => setSlide((current) => (current + 1) % images.length);
  const prevSlide = () => setSlide((current) => (current - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      style={{ background: "oklch(0.08 0.01 265 / 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-3xl rounded-3xl p-6 shadow-2xl sm:p-10"
        style={{
          background: "oklch(0.17 0.015 265)",
          border: "1px solid oklch(0.78 0.16 80 / 0.20)",
          boxShadow: "0 0 80px -20px oklch(0.78 0.16 80 / 0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full transition-colors"
          style={{
            background: "oklch(1 0 0 / 0.06)",
            border: "1px solid oklch(1 0 0 / 0.10)",
            color: "var(--muted-foreground)",
          }}
        >
          <X size={16} />
        </button>

        {/* Project Images */}
        <div className="mb-6 relative">
          <img
            src={currentImage}
            alt={`${project.title} screenshot ${slide + 1}`}
            className="w-full rounded-3xl border object-cover"
            style={{ borderColor: "oklch(1 0 0 / 0.08)", minHeight: 220 }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>
              <div
                className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white"
              >
                {slide + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-extrabold sm:text-3xl">
          {project.title}
        </h3>

        {/* Problem / Solution */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <ModalBlock title="Client Problem">{project.problem}</ModalBlock>
          <ModalBlock title="Solution Built">{project.solution}</ModalBlock>
        </div>

        {/* Steps */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Workflow Steps
          </h4>
          <ol className="mt-3 space-y-3">
            {project.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span
                  className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full text-[11px] font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                    color: "oklch(0.10 0.01 265)",
                  }}
                >
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Tools table */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Tools Used
          </h4>
          <div
            className="mt-3 overflow-hidden rounded-xl"
            style={{ background: "oklch(1 0 0 / 0.03)", border: "1px solid oklch(1 0 0 / 0.08)" }}
          >
            <table className="w-full text-sm">
              <tbody>
                {project.tools.map((t, i) => (
                  <tr
                    key={t.tool}
                    style={i ? { borderTop: "1px solid oklch(1 0 0 / 0.06)" } : {}}
                  >
                    <td className="w-1/3 px-4 py-2.5 font-semibold" style={{ color: "var(--gold)" }}>
                      {t.tool}
                    </td>
                    <td className="px-4 py-2.5 text-muted-foreground">{t.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Results Timeline
          </h4>
          <div className="relative mt-5">
            <div
              className="absolute left-0 right-0 top-3 h-px origin-left"
              style={{ background: "var(--gradient-primary)", animation: "draw-line 0.8s ease-out forwards" }}
            />
            <div
              className="relative grid gap-3"
              style={{ gridTemplateColumns: `repeat(${project.timeline.length}, minmax(0, 1fr))` }}
            >
              {project.timeline.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span
                    className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold"
                    style={{
                      background: "var(--gradient-primary)",
                      color: "oklch(0.10 0.01 265)",
                      boxShadow: "0 0 0 4px var(--background)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="mt-2 text-[11px] font-medium leading-tight">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value */}
        <div
          className="mt-6 rounded-2xl p-4"
          style={{
            background: "oklch(0.78 0.16 80 / 0.06)",
            border: "1px solid oklch(0.78 0.16 80 / 0.25)",
          }}
        >
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
            Estimated Client Value
          </div>
          <div className="mt-1 font-display text-2xl font-extrabold" style={{ color: "var(--gold)" }}>
            {project.value}
          </div>
        </div>

        {/* Nav */}
        <div
          className="mt-8 flex items-center justify-between border-t pt-4"
          style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
        >
          <button
            onClick={onPrev}
            className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
            style={{
              background: "oklch(1 0 0 / 0.04)",
              border: "1px solid oklch(1 0 0 / 0.10)",
              color: "var(--muted-foreground)",
            }}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <button onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">
            Close
          </button>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
            style={{
              background: "oklch(1 0 0 / 0.04)",
              border: "1px solid oklch(1 0 0 / 0.10)",
              color: "var(--muted-foreground)",
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ModalBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{ background: "oklch(1 0 0 / 0.03)", border: "1px solid oklch(1 0 0 / 0.08)" }}
    >
      <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--gold-dim)" }}>
        {title}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
