import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glitcherpink: "var(--glitcher-pink)",
        glitcherred: "var(--glitcher-red)",
      },
      fontFamily: {
        sans: ["var(--font-cy-grotesk)"],
        display: ["var(--font-cy-grotesk-display)"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: { "infinite-scroll": "infinite-scroll linear infinite" },
    },
  },
  plugins: [],
} satisfies Config;
