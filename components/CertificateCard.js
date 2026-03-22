"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function CertificateCard({
  title,
  issuer,
  date,
  description,
  skills,
  image,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isFlipped = isHovered || isPinned;
  const faceStyle = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="h-[25.5rem] [perspective:1600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-full w-full origin-center [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.9,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        <motion.button
          type="button"
          onClick={() => setIsPinned((prev) => !prev)}
          className="absolute inset-0 w-full rounded-[1.9rem] text-left [transform:rotateY(0deg)]"
          style={faceStyle}
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          whileTap={{ scale: 0.985 }}
        >
          <motion.div
            animate={{
              opacity: isFlipped ? 0 : 1,
              y: isFlipped ? -4 : 0,
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.18,
              ease: "easeOut",
            }}
            className="glass-card interactive-surface relative h-full rounded-[1.9rem] p-5 shadow-[0_24px_80px_rgba(244,114,182,0.08)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-sky-400/10" />
            <div
              className="absolute inset-x-0 bottom-0 h-[36%] bg-white/5"
              style={{ clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)" }}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-200">
                  {issuer}
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  {date}
                </span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/60">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-rose-400/10" />
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={520}
                  className="h-44 w-full bg-slate-950/40 p-2 object-contain"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold leading-7 text-white">{title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-300">
                  {description}
                </p>
              </div>

              <div className="mt-auto pt-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Hover to flip
                </p>
              </div>
            </div>
          </motion.div>
        </motion.button>

        <motion.div
          className="absolute inset-0 [transform:rotateY(180deg)]"
          style={faceStyle}
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        >
          <motion.div
            animate={{
              opacity: isFlipped ? 1 : 0,
              y: isFlipped ? 0 : 10,
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.28,
              delay: prefersReducedMotion ? 0 : isFlipped ? 0.2 : 0,
              ease: "easeOut",
            }}
            className="glass-card interactive-surface relative flex h-full flex-col rounded-[1.9rem] p-6 shadow-[0_24px_80px_rgba(244,114,182,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/12 via-transparent to-fuchsia-400/12" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    {issuer}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
                    {title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">
                  {date}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="pt-5 text-xs uppercase tracking-[0.24em] text-slate-400">
                Hover out to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
