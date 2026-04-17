import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#EAF2FB",
          100: "#C9DDF3",
          200: "#93BBE6",
          300: "#5D99D8",
          400: "#2F78C4",
          500: "#1565C0",
          600: "#0F4E97",
          700: "#0B3C75",
          800: "#082C57",
          900: "#051E3C",
          DEFAULT: "#0B3C75",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#FFF3EE",
          100: "#FFD9C7",
          200: "#FFB08D",
          300: "#FF8959",
          400: "#F86E34",
          500: "#F4511E",
          600: "#D23E10",
          700: "#A2300C",
          DEFAULT: "#F4511E",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          primary: "#26A69A",
          secondary: "#7E57C2",
          foreground: "hsl(var(--accent-foreground))",
        },
        neutral: {
          100: "#FFFFFF",
          200: "#ECEFF3",
          300: "#90A4AE",
          400: "#64748B",
          500: "#475569",
          600: "#334155",
          700: "#1F2937",
          800: "#0F172A",
          DEFAULT: "#F5F7FA",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      screens: {
        lg: "991px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,60,117,0.04), 0 8px 24px rgba(11,60,117,0.06)",
        elevated:
          "0 2px 4px rgba(11,60,117,0.06), 0 16px 40px rgba(11,60,117,0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
