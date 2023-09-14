/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["montserrat", "sans-serif"],
        heading: ["montserrat", "sans-serif"],
      },
      animation: {
        blob: "blob 8s infinite",
        fadedown: "fadedown 1s",
        fadeup: "fadeup 1s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(20px, -40px) scale(1.05)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadedown: {
          "0%": {
            opacity: "0",
            transform: "translate(0px, -30px) scale(0.9)",
          },
          "100%": {
            opacity: "100",
            transform: "scale(1)",
          },
        },
        fadeup: {
          "0%": {
            opacity: "0",
            transform: "translate(0px, 10px) scale(0.95)",
          },
          "100%": {
            opacity: "100",
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
