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
			// ============================================
			// NEW TYPOGRAPHY SYSTEM - Consolidated Styles
			// ============================================
			
			// Page Headings (for internal page heroes - Work, Journal, etc.)
			'display-xxl': ['clamp(72px, 12vw, 128px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// Hero Headings (for main page heroes - Home, Contact)
			'display-xl': ['clamp(48px, 8vw, 85px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// Subtitle (for taglines/subtitles under headings)
			'subtitle': ['clamp(20px, 3.5vw, 30px)', { lineHeight: '130%', letterSpacing: '0%' }],
			
			// Section Headings (for major section titles - desktop)
			'section-heading': ['clamp(36px, 4.5vw, 58px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// Section Headings Mobile (for major section titles - mobile only, tighter leading, uppercase)
			'section-heading-mobile': ['clamp(36px, 4.5vw, 58px)', { lineHeight: '115%', letterSpacing: '0%' }],
			
			// Expertise Carousel (specialized for vertical carousel - scales with WE SVG)
        'expertise-carousel': ['clamp(32px, 7vw, 84px)', { lineHeight: '85%', letterSpacing: '0.03em' }],
			
			// Nav Heading Desktop (for large navigation menu titles)
			'nav-heading': ['clamp(100px, 8.5vw, 120px)', { lineHeight: '100%', letterSpacing: '0%' }],
			
			// Nav Heading Mobile (for mobile navigation menu titles)
			'nav-heading-mobile': ['clamp(48px, 14vw, 72px)', { lineHeight: '100%', letterSpacing: '0%' }],
			
			// Body text - XL (for featured/intro paragraphs - bold)
			'body-xl': ['clamp(18px, 2.2vw, 24px)', { lineHeight: '160%', letterSpacing: '0%' }],
			
			// Body text - Large (for main paragraphs - normal weight)
			'body-lg': ['clamp(16px, 1.8vw, 20px)', { lineHeight: '160%', letterSpacing: '0%' }],
			
			// Body text - Medium (for standard paragraphs - normal weight)
			'body-md': ['clamp(14px, 1.5vw, 18px)', { lineHeight: '160%', letterSpacing: '0%' }],
			
			// Mono Large (for mono text at body-lg size - semibold)
			'mono-lg': ['clamp(16px, 1.8vw, 20px)', { lineHeight: '160%', letterSpacing: '0%' }],
			
			// Button text (mono, uppercase, tight line-height)
			'button': ['clamp(12px, 1.8vw, 16px)', { lineHeight: '100%', letterSpacing: '2%' }],
			
			// Link text (mono, clean, bold on hover)
			'link': ['clamp(12px, 1.5vw, 14px)', { lineHeight: '120%', letterSpacing: '2%' }],
			
			// Tag (for tags - mono, light weight)
			'tag': ['clamp(11px, 1.8vw, 14px)', { lineHeight: '100%', letterSpacing: '2%' }],
			
			// Title Card (for project/card titles - bold, large)
			'title-card': ['clamp(24px, 3.5vw, 36px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// CTA (for call-to-action titles - specialized for CTA component)
			// Note: Actual fontSize is handled dynamically in CTA.tsx based on viewport state
			'cta': ['clamp(48px, 3.5vw, 72px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// Accordion Heading (for mobile accordion titles - bold, medium-large)
			'accordion-heading': ['clamp(28px, 4.5vw, 38px)', { lineHeight: '130%', letterSpacing: '0%' }],
			
			// Pull Quote Large (for large featured quotes - bold, sans-serif)
			'pull-quote-lg': ['clamp(24px, 3vw, 30px)', { lineHeight: '130%', letterSpacing: '0%' }],
			
			// Pull Quote Small (for sidebar quotes - mono, uppercase)
			'pull-quote-sm': ['clamp(16px, 2vw, 20px)', { lineHeight: '140%', letterSpacing: '0%' }],
			
			// Featured Text (for mission statements, large featured copy)
			'featured-text': ['clamp(28px, 4vw, 42px)', { lineHeight: '140%', letterSpacing: '0%' }],
			
			
			// ============================================
			// OLD SYSTEM - To be phased out
			// ============================================
			
			// 'display-xxl' - MOVED TO NEW SYSTEM ABOVE
			// 'display-xl' - MOVED TO NEW SYSTEM ABOVE
			'display-lg': ['clamp(40px, 7vw, 72px)', { lineHeight: '120%', letterSpacing: '0%' }],
			'display-md': ['clamp(36px, 6vw, 58px)', { lineHeight: '120%', letterSpacing: '0%' }],
			'display-sm': ['clamp(32px, 5vw, 48px)', { lineHeight: '120%', letterSpacing: '0%' }],
			
			// Heading sizes - OLD
			'heading-1': ['clamp(28px, 4.5vw, 38px)', { lineHeight: '130%', letterSpacing: '0%' }],
			'heading-2': ['clamp(24px, 4vw, 32px)', { lineHeight: '130%', letterSpacing: '0%' }],
			'heading-3': ['clamp(20px, 3.5vw, 30px)', { lineHeight: '130%', letterSpacing: '0%' }],
			'heading-4': ['clamp(18px, 3vw, 24px)', { lineHeight: '140%', letterSpacing: '0%' }],
			
			// Mono Heading sizes (for big bold mono text, NOT uppercase) - OLD
			'mono-heading-lg': ['clamp(24px, 4vw, 32px)', { lineHeight: '130%', letterSpacing: '0%' }],
			'mono-heading-md': ['clamp(20px, 3.5vw, 30px)', { lineHeight: '130%', letterSpacing: '0%' }],
			'mono-heading-sm': ['clamp(18px, 3vw, 24px)', { lineHeight: '140%', letterSpacing: '0%' }],
			
			// Body text sizes - OLD
			// 'body-xl' - MOVED TO NEW SYSTEM ABOVE
			// 'body-lg' - MOVED TO NEW SYSTEM ABOVE
			// 'body-md' - MOVED TO NEW SYSTEM ABOVE
			'body-sm': ['clamp(12px, 1.2vw, 15px)', { lineHeight: '160%', letterSpacing: '0%' }],
			'body-xs': ['clamp(10px, 1vw, 14px)', { lineHeight: '160%', letterSpacing: '0%' }],
			
			// Mono/label sizes (for tags, metadata) - OLD
			'label-lg': ['clamp(14px, 1.8vw, 16px)', { lineHeight: '100%', letterSpacing: '2%' }],
			'label-md': ['clamp(13px, 1.5vw, 14px)', { lineHeight: '100%', letterSpacing: '2%' }],
			'label-sm': ['clamp(11px, 1.2vw, 12px)', { lineHeight: '100%', letterSpacing: '2%' }],
			// 'button' - MOVED TO NEW SYSTEM ABOVE
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