import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
