import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1565C0",
          200: "#1E88E5",
          100: "#64B5F6",
          300: "#0B3C75",
        },
        secondary: {
          DEFAULT: "#F4511E",
          200: "#FF7043",
          100: "#FF9E80",
        },
        accent: {
          primary: "#26A69A",
          secondary: "#7E57C2",
        },
        neutral: {
          DEFAULT: "#F5F7FA",
          100: "#FFFFFF",
          200: "#90A4AE",
          300: "#455A64",
        },
      },
      screens: {
        lg: "991px",
      },
    },
  },
  plugins: [],
} satisfies Config;
