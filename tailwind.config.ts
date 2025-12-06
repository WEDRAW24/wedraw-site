import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-mono)',
  				'monospace'
  			]
  		},
  		fontWeight: {
  			'area-thin': '100',
  			'area-extrablack': '200',
  			'area-normal': '400',
  			'area-medium': '500',
  			'area-semibold': '600',
  			'area-bold': '700',
  			'area-extrabold': '800',
  			'area-black': '900',
  			'mono-thin': '200',
  			'mono-light': '300',
  			'mono-normal': '400',
  			'mono-medium': '500',
  			'mono-semibold': '600',
  			'mono-bold': '700',
  			'mono-black': '800'
  		},
  		fontSize: {
  			// Display sizes (for hero headings)
  			'display-xl': ['clamp(48px, 8vw, 85px)', { lineHeight: '120%', letterSpacing: '0%' }],
  			'display-lg': ['clamp(40px, 7vw, 72px)', { lineHeight: '120%', letterSpacing: '0%' }],
  			'display-md': ['clamp(36px, 6vw, 58px)', { lineHeight: '120%', letterSpacing: '0%' }],
  			'display-sm': ['clamp(32px, 5vw, 48px)', { lineHeight: '120%', letterSpacing: '0%' }],
  			
  			// Heading sizes
  			'heading-1': ['clamp(28px, 4.5vw, 38px)', { lineHeight: '130%', letterSpacing: '0%' }],
  			'heading-2': ['clamp(24px, 4vw, 32px)', { lineHeight: '130%', letterSpacing: '0%' }],
  			'heading-3': ['clamp(20px, 3.5vw, 30px)', { lineHeight: '130%', letterSpacing: '0%' }],
  			'heading-4': ['clamp(18px, 3vw, 24px)', { lineHeight: '140%', letterSpacing: '0%' }],
  			
  			// Body text sizes
  			'body-xl': ['clamp(18px, 2.2vw, 24px)', { lineHeight: '160%', letterSpacing: '0%' }],
  			'body-lg': ['clamp(16px, 1.8vw, 20px)', { lineHeight: '160%', letterSpacing: '0%' }],
  			'body-md': ['clamp(14px, 1.5vw, 18px)', { lineHeight: '160%', letterSpacing: '0%' }],
  			'body-sm': ['clamp(12px, 1.2vw, 15px)', { lineHeight: '160%', letterSpacing: '0%' }],
  			'body-xs': ['clamp(10px, 1vw, 14px)', { lineHeight: '160%', letterSpacing: '0%' }],
  			
  			// Mono/label sizes (for buttons, tags, metadata)
  			'label-lg': ['clamp(14px, 1.8vw, 16px)', { lineHeight: '100%', letterSpacing: '2%' }],
  			'label-md': ['clamp(13px, 1.5vw, 14px)', { lineHeight: '100%', letterSpacing: '2%' }],
  			'label-sm': ['clamp(11px, 1.2vw, 12px)', { lineHeight: '100%', letterSpacing: '2%' }],
  		},
  		colors: {
  			blueprint: '#2242FF',
  			marker: '#E44E37',
  			meadow: '#04A573',
  			sunny: '#FFB300',
  			black: '#000014',
  			white: '#FFFFFF',
  			'dark-grey': '#232838',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'2xs': '0.25rem',
  			xs: '0.5rem',
  			sm: '0.75rem',
  			md: '1rem',
  			lg: '1.5rem',
  			xl: '2rem',
  			'2xl': '3rem',
  			'3xl': '4rem',
  			section: '6rem',
  			// Fluid spacing utilities
  			'fluid-xs': 'clamp(0.5rem, 1vw, 1rem)',      // 8px - 16px
  			'fluid-sm': 'clamp(0.75rem, 1.5vw, 1.5rem)', // 12px - 24px
  			'fluid-md': 'clamp(1rem, 2vw, 2rem)',        // 16px - 32px
  			'fluid-lg': 'clamp(1.5rem, 3vw, 3rem)',      // 24px - 48px
  			'fluid-xl': 'clamp(2rem, 4vw, 4rem)',        // 32px - 64px
  			'fluid-2xl': 'clamp(3rem, 6vw, 6rem)',       // 48px - 96px
  			'fluid-3xl': 'clamp(4rem, 8vw, 8rem)',       // 64px - 128px
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '6rem',
  				'2xl': '7.75rem'
  			},
  			screens: {
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1440px'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			'pulse-ripple': 'pulseRipple 1s ease-in-out',
			'fadeIn': 'fadeIn 500ms ease-in-out',
			'logo-sweep': 'logoSweep 8s linear infinite',
		},
		keyframes: {
			pulseRipple: {
				'0%': { transform: 'scale(var(--scale))' },
				'50%': { transform: 'scale(1)' },
				'100%': { transform: 'scale(var(--scale))' }
			},
			fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' }
			},
			logoSweep: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-320vw)' }
			},
		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
};

export default config;