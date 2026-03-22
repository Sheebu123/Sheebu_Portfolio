"use client";

import InteractiveCard from "@/components/InteractiveCard";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Download Resume", href: "/SHEEBU_CV.pdf", variant: "primary" },
  { label: "View Projects", href: "/projects", variant: "secondary" },
];

const highlights = ["Next.js + Django", "PostgreSQL", "Responsive UI"];

const heroCards = [
  {
    type: "social",
    label: "GitHub",
    href: "https://github.com/Sheebu123",
    icon: Github,
  },
  {
    type: "social",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sheebu-tiwari/",
    icon: Linkedin,
  },
];

export default function Hero() {
  return (
    <section id="home" className="section-shell section-spacing relative pb-16 sm:pb-24">
      <div className="absolute left-0 top-16 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute right-0 top-32 -z-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="grid items-center gap-14 xl:gap-20 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Open to work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-8 max-w-5xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-7xl"
          >
            Sheebu Tiwari
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-sm font-medium tracking-wide text-slate-400 sm:text-base"
          >
            Computer Science and Engineering Student
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl lg:max-w-3xl"
          >
            Full Stack Developer building clean, scalable web applications with
            Next.js and Django.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {links.map((link) => {
              const isResume = link.label === "Download Resume";
              const baseClasses =
                "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition";
              const variantClasses =
                link.variant === "primary"
                  ? "bg-primary text-slate-950 hover:bg-sky-300"
                  : link.variant === "secondary"
                    ? "border border-white/15 bg-white/5 text-white hover:border-primary hover:text-primary"
                    : "border border-transparent bg-slate-900/70 text-slate-200 hover:border-white/15 hover:text-white";

              return (
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={link.label}
                >
                  {link.href.startsWith("http") || isResume ? (
                    <a
                      href={link.href}
                      download={isResume ? "SHEEBU_CV.pdf" : undefined}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className={`${baseClasses} ${variantClasses}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={`${baseClasses} ${variantClasses}`}>
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44 }}
            className="mt-12 grid max-w-xl gap-4 sm:grid-cols-2"
          >
            {heroCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <InteractiveCard
                    className="glass-card rounded-3xl border-white/10 bg-white/[0.04] p-5"
                    maxTilt={5}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <Icon size={22} />
                      </div>
                      <ArrowUpRight size={16} className="text-primary" />
                    </div>
                    <p className="mt-4 text-lg font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-400">
                      Visit Profile
                    </p>
                  </InteractiveCard>
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-2xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-emerald-400/15 blur-2xl" />
          <InteractiveCard className="glass-card relative overflow-hidden rounded-[2.25rem] border-white/10 p-7 shadow-glow sm:p-8">
            <div className="absolute inset-0 bg-grid-fade bg-grid opacity-70" />
            <div className="relative">
              <div className="mx-auto flex h-[18.5rem] w-[18.5rem] items-center justify-center rounded-full bg-gradient-to-br from-primary via-sky-300/40 to-emerald-300/30 p-2 shadow-[0_0_80px_rgba(56,189,248,0.18)] sm:h-[21.5rem] sm:w-[21.5rem] lg:h-[23rem] lg:w-[23rem]">
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-slate-950">
                  <Image
                    src="/MY%20Profile%20Photo.jpg"
                    alt="Sheebu Tiwari"
                    fill
                    sizes="(max-width: 768px) 18.5rem, (max-width: 1200px) 21.5rem, 23rem"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">
                    Current Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Fast, useful full-stack products
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">
                    Based In
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Lovely Professional University
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-slate-900/60 p-5 sm:p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Working Style
                </p>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  I enjoy building modern interfaces with structured backend logic,
                  clear user flows, and production-ready implementation.
                </p>
              </div>
            </div>
          </InteractiveCard>
        </motion.div>
      </div>
    </section>
  );
}
