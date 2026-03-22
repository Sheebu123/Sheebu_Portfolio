/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0b1120",
        surfaceAlt: "#111827",
        primary: "#38bdf8",
        accent: "#22c55e",
        text: "#e2e8f0",
        muted: "#94a3b8",
        border: "rgba(148, 163, 184, 0.2)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(56, 189, 248, 0.15)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 35%), linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 32px 32px, 32px 32px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
