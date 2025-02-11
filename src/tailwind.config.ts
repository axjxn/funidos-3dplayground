
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        bingo: {
          yellow: "#FFE81F",
          black: "#1A1A1A",
          green: "#4CAF50",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      keyframes: {
        "number-pop": {
          "0%": { transform: "scale(0.95) translateY(5px)" },
          "70%": { transform: "scale(1.1) translateY(-2px)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        "number-pop": "number-pop 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
