"use client";

import { motion } from "framer-motion";
import SkillIcon from "@/components/SkillIcon";

const proficiencyLabels = [
  { min: 90, label: "Excellent" },
  { min: 80, label: "Strong" },
  { min: 70, label: "Working Knowledge" },
  { min: 0, label: "Learning" },
];

export default function SkillCard({ skill, level, accent }) {
  const proficiency =
    proficiencyLabels.find((item) => level >= item.min)?.label || "Learning";

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/65 p-4 backdrop-blur-sm"
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.surface} opacity-0 transition duration-500 group-hover:opacity-100`}
      />
      <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_38%,transparent_64%,rgba(255,255,255,0.05))] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <SkillIcon skill={skill} />
            <div className="min-w-0">
              <h4 className="truncate text-base font-semibold text-white">
                {skill}
              </h4>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                {proficiency}
              </p>
            </div>
          </div>

          <motion.div
            variants={{
              rest: { opacity: 0.55, y: 0 },
              hover: { opacity: 1, y: -2 },
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${accent.badge}`}
          >
            {level}%
          </motion.div>
        </div>

        <motion.div
          variants={{
            rest: { opacity: 0.4, y: 8 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.26, ease: "easeOut" }}
          className="mt-5"
        >
          <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
            <span>Proficiency</span>
            <span>Current level</span>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              variants={{
                rest: { scaleX: 0.18 },
                hover: { scaleX: level / 100 },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left center" }}
              className={`h-full rounded-full bg-gradient-to-r ${accent.bar}`}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
