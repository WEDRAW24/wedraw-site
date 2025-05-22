import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // ← Optional, if you have anything under /app
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // ← Optional, for legacy support
  ],
  
  theme: {
    extend: {
      colors: {
        blueprint: '#2242FF',
        marker: '#E44E37',
        meadow: '#04A573',
        sunny: '#FFB300',
        black: '#000014',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      spacing: {
        '2xs': '0.25rem',   // 4px
        'xs': '0.5rem',     // 8px
        'sm': '0.75rem',    // 12px
        'md': '1rem',       // 16px
        'lg': '1.5rem',     // 24px
        'xl': '2rem',       // 32px
        '2xl': '3rem',      // 48px
        '3xl': '4rem',      // 64px
        'section': '6rem',  // 96px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          2xl: '7.75rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px', // standard design width max
        },
      },
      
    },
  },
  plugins: [],
};

export default config;
