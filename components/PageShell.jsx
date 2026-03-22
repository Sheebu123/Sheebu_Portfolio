"use client";

import { motion } from "framer-motion";

export default function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-x-hidden"
    >
      {children}
    </motion.main>
  );
}
