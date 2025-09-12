import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'plus-jakarta': ['var(--font-plus-jakarta)', 'sans-serif'],
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dotted-grid': 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 2px, transparent 0)',
  		},
      backgroundSize: {
        'dotted-grid': '32px 32px',
      },
  		keyframes: {
  			appear: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '100%'
  				}
  			},
  			'pulse-slow': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			'float-1': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'25%': {
  					transform: 'translate(30px, -20px) scale(1.1)'
  				},
  				'50%': {
  					transform: 'translate(-20px, 30px) scale(0.9)'
  				},
  				'75%': {
  					transform: 'translate(20px, 10px) scale(1.05)'
  				}
  			},
  			'float-2': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(-40px, 20px) scale(1.2)'
  				},
  				'66%': {
  					transform: 'translate(25px, -30px) scale(0.8)'
  				}
  			},
  			'float-3': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'20%': {
  					transform: 'translate(25px, 15px) scale(1.15)'
  				},
  				'40%': {
  					transform: 'translate(-15px, -25px) scale(0.85)'
  				},
  				'60%': {
  					transform: 'translate(35px, -10px) scale(1.05)'
  				},
  				'80%': {
  					transform: 'translate(-20px, 20px) scale(0.95)'
  				}
  			},
  			'float-4': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'30%': {
  					transform: 'translate(-30px, -15px) scale(1.1)'
  				},
  				'70%': {
  					transform: 'translate(20px, 25px) scale(0.9)'
  				}
  			},
  			'float-5': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'25%': {
  					transform: 'translate(40px, 20px) scale(1.25)'
  				},
  				'50%': {
  					transform: 'translate(-25px, -35px) scale(0.75)'
  				},
  				'75%': {
  					transform: 'translate(15px, 10px) scale(1.1)'
  				}
  			},
  			'float-6': {
  				'0%, 100%': {
  					transform: 'translate(0, 0) scale(1)'
  				},
  				'40%': {
  					transform: 'translate(-35px, 30px) scale(1.3)'
  				},
  				'80%': {
  					transform: 'translate(30px, -20px) scale(0.7)'
  				}
  			}
  		},
  		animation: {
  			appear: 'appear 300ms ease-out forwards',
  			'pulse-slow': 'pulse-slow 10s infinite ease-in-out',
  			'float-1': 'float-1 15s infinite ease-in-out',
  			'float-2': 'float-2 18s infinite ease-in-out',
  			'float-3': 'float-3 20s infinite ease-in-out',
  			'float-4': 'float-4 16s infinite ease-in-out',
  			'float-5': 'float-5 22s infinite ease-in-out',
  			'float-6': 'float-6 14s infinite ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
