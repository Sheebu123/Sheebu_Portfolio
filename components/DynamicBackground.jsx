"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const floatEase = [0.22, 1, 0.36, 1];

export default function DynamicBackground() {
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef(0);
  const [cursor, setCursor] = useState({ x: 52, y: 34 });

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        setCursor({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_36%),linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.4))]" />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 70, -20, 0],
                y: [0, -36, 48, 0],
                rotate: [0, 12, -10, 0],
                scale: [1, 1.08, 0.97, 1],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: floatEase,
        }}
        className="absolute left-[-10%] top-[4%] h-[28rem] w-[28rem] rounded-[42%] bg-[radial-gradient(circle_at_30%_30%,rgba(251,113,133,0.32),rgba(244,114,182,0.16)_42%,transparent_72%)] blur-3xl"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -80, 24, 0],
                y: [0, 45, -28, 0],
                rotate: [0, -18, 10, 0],
                scale: [1, 0.96, 1.05, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: floatEase,
        }}
        className="absolute right-[-14%] top-[12%] h-[24rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.22),rgba(59,130,246,0.12)_44%,transparent_75%)] blur-3xl"
      />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 26, -34, 0],
                y: [0, -24, 36, 0],
                rotate: [0, 24, -16, 0],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: floatEase,
        }}
        className="absolute bottom-[-16%] left-[8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.18),rgba(16,185,129,0.08)_46%,transparent_74%)] blur-3xl"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)] opacity-[0.12]" />

      <motion.div
        className="absolute inset-0 opacity-80 transition duration-300"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.55, 0.8, 0.6, 0.8],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            radial-gradient(32rem 32rem at ${cursor.x}% ${cursor.y}%, rgba(251, 113, 133, 0.13), transparent 58%),
            radial-gradient(26rem 26rem at ${100 - cursor.x}% ${Math.max(cursor.y - 12, 0)}%, rgba(56, 189, 248, 0.10), transparent 54%)
          `,
        }}
      />
    </div>
  );
}
