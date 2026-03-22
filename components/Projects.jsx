"use client";

import InteractiveCard from "@/components/InteractiveCard";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "SmartSalon",
    subtitle: "Appointment Scheduling System",
    label: "Major Project",
    summary:
      "A workflow-focused salon platform designed for smooth booking, scheduling, and role-based access across customers, staff, and administrators.",
    tech: ["Python", "Django", "Next.js", "Tailwind", "PostgreSQL"],
    features: [
      "Staff scheduling",
      "Customer booking system",
      "JWT authentication",
      "Role-based authorization",
      "30-minute booking slot system",
    ],
    github: "https://github.com/Sheebu123/SmartSalon-appointment-system",
    demo: "https://smartsalon-appointment-system.vercel.app/",
    theme: {
      surface:
        "from-rose-500/16 via-pink-500/10 to-orange-400/12",
      line: "from-rose-300 via-pink-300 to-orange-200",
      badge:
        "border-rose-300/20 bg-gradient-to-r from-rose-400/18 to-pink-400/10 text-rose-100",
      tech:
        "border-rose-300/15 bg-rose-400/10 text-rose-50",
      button:
        "bg-gradient-to-r from-rose-300 to-pink-300 text-slate-950 shadow-[0_16px_40px_rgba(251,113,133,0.2)] hover:from-rose-200 hover:to-pink-200",
      ghost:
        "border-rose-300/18 bg-rose-400/8 text-rose-50 hover:border-rose-200/30 hover:bg-rose-400/14",
      dot: "bg-rose-300",
      blob:
        "bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.28),rgba(244,114,182,0.12)_42%,transparent_72%)]",
      orb:
        "bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.22),transparent_70%)]",
      accent: "text-rose-200",
    },
  },
  {
    title: "HireProffo",
    subtitle: "Recruitment Platform",
    label: "Project",
    summary:
      "A hiring workflow platform built to connect recruiters and candidates with clear job discovery, secure access control, and application tracking.",
    tech: ["Next.js", "Django", "PostgreSQL", "Tailwind"],
    features: [
      "Recruiters post job listings",
      "Candidates apply online",
      "Role-based authentication",
      "Job search and application tracking",
      "Recruiter dashboard",
    ],
    github: "https://github.com/Sheebu123/HireProffo-Jobportal-Website",
    demo: "",
    theme: {
      surface:
        "from-cyan-500/16 via-sky-500/10 to-emerald-400/12",
      line: "from-cyan-300 via-sky-300 to-emerald-200",
      badge:
        "border-cyan-300/20 bg-gradient-to-r from-cyan-400/18 to-emerald-400/10 text-cyan-100",
      tech:
        "border-cyan-300/15 bg-cyan-400/10 text-cyan-50",
      button:
        "bg-gradient-to-r from-cyan-300 to-emerald-300 text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.2)] hover:from-cyan-200 hover:to-emerald-200",
      ghost:
        "border-cyan-300/18 bg-cyan-400/8 text-cyan-50 hover:border-cyan-200/30 hover:bg-cyan-400/14",
      dot: "bg-cyan-300",
      blob:
        "bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.24),rgba(56,189,248,0.12)_42%,transparent_72%)]",
      orb:
        "bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.2),transparent_70%)]",
      accent: "text-cyan-200",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-spacing">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work focused on real product flows."
          description="These projects highlight product thinking, structured backend workflows, and frontend experiences built for real users."
        />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <InteractiveCard className="glass-card relative h-full overflow-hidden rounded-[2rem] border-white/10 p-0">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.theme.surface}`}
              />
              <motion.div
                aria-hidden="true"
                animate={{
                  x: [0, 16, -8, 0],
                  y: [0, -12, 10, 0],
                  scale: [1, 1.05, 0.98, 1],
                }}
                transition={{
                  duration: 11 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -right-10 -top-10 h-44 w-44 rounded-full blur-3xl ${project.theme.blob}`}
              />
              <motion.div
                aria-hidden="true"
                animate={{
                  x: [0, -12, 10, 0],
                  y: [0, 12, -10, 0],
                }}
                transition={{
                  duration: 13 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -bottom-12 left-0 h-36 w-36 rounded-full blur-3xl ${project.theme.orb}`}
              />

              <div className="relative z-10 flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <span
                      className={`inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${project.theme.badge}`}
                    >
                      {project.label}
                    </span>
                    <div
                      className={`mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r ${project.theme.line}`}
                    />
                    <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className={`mt-2 text-sm font-medium ${project.theme.accent}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.06 }}
                    className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:flex"
                  >
                    <Sparkles size={20} />
                  </motion.div>
                </div>

                <p className="mt-6 max-w-xl leading-8 text-slate-200/90">
                  {project.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className={`rounded-full border px-4 py-2 text-sm font-medium ${project.theme.tech}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 h-2.5 w-2.5 rounded-full ${project.theme.dot}`}
                        />
                        <span className="text-sm leading-6 text-slate-200">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${project.theme.button}`}
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={16} />
                  </motion.a>
                  {project.demo ? (
                    <motion.a
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${project.theme.ghost}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={16} />
                    </motion.a>
                  ) : (
                    <div
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold opacity-70 ${project.theme.ghost}`}
                    >
                      <span>Deployment Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </InteractiveCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
