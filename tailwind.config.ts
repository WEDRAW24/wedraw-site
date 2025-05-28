import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // Area Normal
        mono: ["var(--font-mono)", "monospace"],   // Degular Mono
      },
      fontWeight: {
        // Area Normal weights
        'area-thin': '100',          // Area Normal Thin
        'area-extrablack': '200',    // Area Normal Extrablack
        'area-normal': '400',        // Area Normal Regular
        'area-medium': '500',        // Area Normal Medium
        'area-semibold': '600',      // Area Normal Semibold
        'area-bold': '700',          // Area Normal Bold
        'area-extrabold': '800',     // Area Normal Extrabold
        'area-black': '900',         // Area Normal Black

        // Degular Mono weights
        'mono-thin': '200',          // Degular Mono Thin
        'mono-light': '300',         // Degular Mono Light
        'mono-normal': '400',        // Degular Mono Regular
        'mono-medium': '500',        // Degular Mono Medium
        'mono-semibold': '600',      // Degular Mono Semibold
        'mono-bold': '700',          // Degular Mono Bold
        'mono-black': '800',         // Degular Mono Black
      },
      colors: {
        blueprint: "#2242FF", // Bright Blueprint – brand primary
        marker: "#E44E37",    // Marker Red – Work theme
        meadow: "#04A573",    // Meadow Green – Studio theme
        sunny: "#FFB300",     // Sunny Orange – Journal theme
        black: "#000014",     // Deep black background
        white: "#FFFFFF",     // Default white
      },
      spacing: {
        "2xs": "0.25rem",  // 4px
        xs: "0.5rem",      // 8px
        sm: "0.75rem",     // 12px
        md: "1rem",        // 16px
        lg: "1.5rem",      // 24px
        xl: "2rem",        // 32px
        "2xl": "3rem",     // 48px
        "3xl": "4rem",     // 64px
        section: "6rem",   // 96px – standard vertical layout rhythm
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",       // Standard
          "2xl": "7.75rem", // 124px – matches Figma grid
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px", // Max design width
        },
      },
    },
  },
  plugins: [],
};

export default config;