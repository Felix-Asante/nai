import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: {
  				'100': '#64B5F6',
  				'200': '#1E88E5',
  				'300': '#0B3C75',
  				DEFAULT: '#1565C0',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'100': '#FF9E80',
  				'200': '#FF7043',
  				DEFAULT: '#F4511E',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				primary: '#26A69A',
  				secondary: '#7E57C2',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				'100': '#FFFFFF',
  				'200': '#90A4AE',
  				'300': '#455A64',
  				DEFAULT: '#F5F7FA'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		screens: {
  			lg: '991px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
} satisfies Config;
