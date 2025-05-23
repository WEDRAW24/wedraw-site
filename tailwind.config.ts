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
        sans: ["var(--font-sans)", "sans-serif"], // Area Variable
        mono: ["var(--font-mono)", "monospace"],   // Degular Mono
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