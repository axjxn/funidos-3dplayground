
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
        "button-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "number-pop": "number-pop 0.3s ease-out",
        "button-bounce": "button-bounce 2s ease-in-out infinite",
      },
      boxShadow: {
        "3d": "0 4px 0 0 rgba(0, 0, 0, 0.2)",
        "3d-hover": "0 6px 0 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
