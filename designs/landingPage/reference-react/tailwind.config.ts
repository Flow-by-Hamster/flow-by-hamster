import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-dm-serif)", "serif"],
      },
      colors: {
        coral: "#D85A30",
        "coral-light": "#FAECE7",
        "coral-dark": "#993C1D",
        ink: "#2C2C2A",
        muted: "#888780",
        surface: "#F1EFE8",
      },
      letterSpacing: {
        tight: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
