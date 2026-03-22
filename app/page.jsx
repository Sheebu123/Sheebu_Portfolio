import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import InteractiveCard from "@/components/InteractiveCard";

const pageLinks = [
  {
    title: "About",
    href: "/about",
    description: "Background, education, and development focus.",
    accent: "from-sky-500/20 to-cyan-400/5",
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Languages, frameworks, tools, and platforms.",
    accent: "from-emerald-500/20 to-lime-400/5",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Full-stack projects with real product workflows.",
    accent: "from-orange-500/20 to-amber-400/5",
  },
  {
    title: "Certifications",
    href: "/certifications",
    description: "Cloud, AI, DSA, and web development certificates.",
    accent: "from-fuchsia-500/20 to-pink-400/5",
  },
  {
    title: "Achievements",
    href: "/achievements",
    description: "Hackathons and volunteer work beyond academics.",
    accent: "from-violet-500/20 to-indigo-400/5",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "For internships, collaboration, and project discussions.",
    accent: "from-teal-500/20 to-cyan-400/5",
  },
];

const strengths = [
  {
    title: "Scalable Web Apps",
    description:
      "Structured frontend, clean APIs, and database-backed workflows.",
  },
  {
    title: "Problem Solving",
    description:
      "Building solutions that are practical, efficient, and usable.",
  },
  {
    title: "Modern Development",
    description:
      "Comfortable with Next.js, Django, PostgreSQL, and responsive UI.",
  },
];

const quickFacts = [
  { label: "University", value: "LPU" },
  { label: "Specialization", value: "Data Science" },
  { label: "Preferred Stack", value: "Next.js + Django" },
  { label: "Availability", value: "Internships" },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-shell pb-12 sm:pb-20">
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <InteractiveCard className="glass-card rounded-[2rem] p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
              Snapshot
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Work shaped by practical skills and real development experience.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              I build web applications with clean UI, reliable backend logic,
              and simple user-focused flows.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="min-w-0 rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-6"
                >
                  <p className="break-words text-[0.7rem] uppercase leading-5 tracking-[0.18em] text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </InteractiveCard>

          <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-1">
            {strengths.map((strength) => (
              <InteractiveCard
                key={strength.title}
                className="glass-card rounded-[1.75rem] bg-white/[0.04] p-6 sm:p-7"
              >
                <p className="text-lg font-semibold text-white">{strength.title}</p>
                <p className="mt-3 leading-7 text-slate-300">{strength.description}</p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-spacing pt-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
            Explore
          </p>
          <h2 className="section-title mt-4">Explore each section in its own page.</h2>
          <p className="section-copy">
            Each section has its own page for a cleaner and easier experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pageLinks.map((page) => (
            <Link key={page.href} href={page.href} className="block h-full">
              <InteractiveCard className="h-full rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 sm:p-7">
                <span
                  className={`block h-1.5 w-16 rounded-full bg-gradient-to-r ${page.accent}`}
                />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Open Page
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{page.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{page.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <span>View section</span>
                  <ArrowUpRight size={16} />
                </div>
              </InteractiveCard>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
