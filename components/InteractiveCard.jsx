"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

const springConfig = {
  stiffness: 180,
  damping: 22,
  mass: 0.7,
};

export default function InteractiveCard({
  children,
  className = "",
  maxTilt = 7,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(180);
  const mouseY = useMotionValue(140);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${spotlightX}px ${spotlightY}px, rgba(251, 113, 133, 0.2), transparent 68%)`;
  const highlight = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, rgba(244, 114, 182, 0.14), transparent 34%)`;
  const enableMotion = isMounted && !prefersReducedMotion;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerMove = (event) => {
    if (!enableMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(((centerY - y) / centerY) * maxTilt);
    rotateY.set(((x - centerX) / centerX) * maxTilt);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={enableMotion ? { y: -10, scale: 1.01 } : { y: -6 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      style={
        enableMotion
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={`group relative ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100"
        style={enableMotion ? { background: spotlight } : undefined}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100"
        style={enableMotion ? { background: highlight } : undefined}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_34%,transparent_65%,rgba(255,255,255,0.05))] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
