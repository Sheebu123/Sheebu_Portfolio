"use client";

import {
  Atom,
  BarChart3,
  Coffee,
  Database,
  Github,
  GitBranch,
  NotebookPen,
} from "lucide-react";

const iconMap = {
  "C++": {
    gradient: "from-sky-400 via-blue-500 to-indigo-500",
    label: "C++",
    labelClass: "text-[0.72rem] tracking-[0.08em]",
    darkText: false,
  },
  Python: {
    gradient: "from-sky-400 via-blue-500 to-amber-400",
    label: "Py",
    labelClass: "text-sm",
    darkText: false,
  },
  C: {
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    label: "C",
    labelClass: "text-base",
    darkText: false,
  },
  Java: {
    gradient: "from-orange-300 via-orange-400 to-red-400",
    Icon: Coffee,
    darkText: true,
  },
  JavaScript: {
    gradient: "from-amber-300 via-yellow-300 to-lime-300",
    label: "JS",
    labelClass: "text-sm",
    darkText: true,
  },
  HTML: {
    gradient: "from-orange-400 via-rose-400 to-pink-400",
    label: "HTML",
    labelClass: "text-[0.68rem] tracking-[0.12em]",
    darkText: false,
  },
  CSS: {
    gradient: "from-sky-400 via-cyan-400 to-blue-500",
    label: "CSS",
    labelClass: "text-[0.72rem] tracking-[0.12em]",
    darkText: false,
  },
  React: {
    gradient: "from-cyan-300 via-sky-400 to-blue-400",
    Icon: Atom,
    darkText: true,
  },
  "Next.js": {
    gradient: "from-slate-200 via-slate-300 to-white",
    label: "N",
    labelClass: "text-base",
    darkText: true,
  },
  Django: {
    gradient: "from-emerald-300 via-green-400 to-lime-400",
    label: "Dj",
    labelClass: "text-sm",
    darkText: true,
  },
  Git: {
    gradient: "from-orange-300 via-amber-400 to-yellow-300",
    Icon: GitBranch,
    darkText: true,
  },
  GitHub: {
    gradient: "from-slate-300 via-slate-200 to-white",
    Icon: Github,
    darkText: true,
  },
  MySQL: {
    gradient: "from-cyan-300 via-sky-400 to-blue-500",
    Icon: Database,
    darkText: false,
  },
  PostgreSQL: {
    gradient: "from-blue-400 via-indigo-500 to-violet-500",
    Icon: Database,
    darkText: false,
  },
  "Power BI": {
    gradient: "from-yellow-200 via-amber-300 to-yellow-400",
    Icon: BarChart3,
    darkText: true,
  },
  "Jupyter Notebook": {
    gradient: "from-orange-300 via-orange-400 to-rose-400",
    Icon: NotebookPen,
    darkText: true,
  },
};

export default function SkillIcon({ skill }) {
  const config = iconMap[skill] || {
    gradient: "from-slate-300 to-slate-100",
    label: skill.slice(0, 2).toUpperCase(),
    darkText: true,
  };

  const Icon = config.Icon;
  const textClass = config.darkText ? "text-slate-950" : "text-white";

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div
        className={`absolute inset-[1px] rounded-[inherit] bg-gradient-to-br ${config.gradient} opacity-95`}
      />
      <div className="absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_34%,transparent_65%,rgba(255,255,255,0.06))]" />
      {Icon ? (
        <Icon className={`relative z-10 h-6 w-6 ${textClass}`} strokeWidth={2.2} />
      ) : (
        <span
          className={`relative z-10 font-black uppercase ${textClass} ${config.labelClass || "text-sm"}`}
        >
          {config.label}
        </span>
      )}
    </div>
  );
}
