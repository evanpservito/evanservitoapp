import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      fontFamily: {
        KodeMono: ["var(--font-kode-mono)"],
        DMSans: ["var(--font-dm-sans)"],
        Rubik: ["var(--font-rubik)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#AF9AF4",
        grey: "#828282",
      },
    },
  },
  plugins: [],
} satisfies Config;
