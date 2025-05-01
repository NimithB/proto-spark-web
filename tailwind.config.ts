
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Protobots
				proto: {
					cyan: "#1EAEDB",
					orange: "#F97316",
					purple: "#E5DEFF",
					navy: "#0F172A",
				}
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
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 15px rgba(30, 174, 219, 0.5)'  
					},
					'50%': { 
						opacity: '0.8',  
						boxShadow: '0 0 30px rgba(30, 174, 219, 0.8)'  
					}
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'drone-hover': {
					'0%, 100%': { transform: 'translateY(0) rotateZ(0deg)' },
					'25%': { transform: 'translateY(-5px) rotateZ(2deg)' },
					'50%': { transform: 'translateY(-8px) rotateZ(-1deg)' },
					'75%': { transform: 'translateY(-3px) rotateZ(1deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'drone-hover': 'drone-hover 6s ease-in-out infinite'
			},
			backgroundImage: {
				'tech-pattern': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkuOTk5OTk4ODAwMTM5QzYwLDAuMjkzNzA0NDQ0ODM4NSw1OS43MDYyOTU1NTUxNjIsMCw1OS40MTI1OTc3NzY5OCwwQzU5LjExODkwMDAwMDAwMSwwLDU4LjgyNTE5NTU1NTE2MiwwLjI5MzcwNDQ0NDgzODUsNTguODI1MTkxMTExMTYyLDAuNTg3NDA4ODg5Njc2OUM1OC44MjUxOTU1NTUxNjIsMC44ODExMTMzMzQ1MTU0LDU5LjExODkwMDAwMDAwMSwxLjE3NDgxNzc3OTM1NCw1OS40MTI1OTc3NzY5OCwxLjE3NDgxNzc3OTM1NEM1OS43MDYyOTU1NTUxNjIsMS4xNzQ4MTc3NzkzNTQsNjAsMS4xNzQ4MTc3NzkzNTQsNTkuOTk5OTk4ODAwMTM5LDAuODgxMTEzMzM0NTE1NEM1OS45OTk5OTg4MDAxMzksMC41ODc0MDg4ODk2NzY5LDUkMTAwNzQyNzEzMjVwbSBhbHBoYSgwLjE1KSIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjMWVhZWRiIiBvcGFjaXR5PSIwLjExIi8+PHBhdGggZD0iTTMwLDBDMzAuMjkzNzA0NDQ0ODM4LDAsMzAuNTg3NDAyMjIzMDIsMC4yOTM3MDQ0NDQ4Mzg1LDMwLjU4NzQwMjIyMzAyLDAuNTg3NDA4ODg5Njc2OUMzMC41ODc0MDIyMjMwMiwwLjg4MTExMzMzNDUxNTQsMzAuMjkzNzA0NDQ0ODM4LDEuMTc0ODE3Nzc5MzU0LDMwLDEuMTc0ODE3Nzc5MzU0QzI5LjcwNjMwMjIyMzAyLDEuMTc0ODE3Nzc5MzU0LDI5LjQxMjU5Nzc3Njk4LDAuODgxMTEzMzM0NTE1NCwyOS40MTI1OTc3NzY5OCwwLjU4NzQwODg4OTY3NjlDMjkuNDEyNTk3Nzc2OTgsMC4yOTM3MDQ0NDQ4Mzg1LDI5LjcwNjMwMjIyMzAyLDAsMzAsMFoiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iI2Y5NzMxNiIgb3BhY2l0eT0iMC4xMSIvPjxwYXRoIGQ9Ik0wLDBDMC4yOTM3MDQ0NDQ4Mzg1LDAsMC41ODc0MDg4ODk2NzY5LDAuMjkzNzA0NDQ0ODM4NSwwLjU4NzQwODg4OTY3NjksMC41ODc0MDg4ODk2NzY5QzAuNTg3NDA4ODg5Njc2OSwwLjg4MTExMzMzNDUxNTQsMC4yOTM3MDQ0NDQ4Mzg1LDEuMTc0ODE3Nzc5MzU0LDAsMS4xNzQ4MTc3NzkzNTRDMC4wMDAwMDAyNDQ4Mzg1MSwxLjE3NDgxNzc3OTM1NCwwLDAuODgxMTEzMzM0NTE1NCwwLDAuNTg3NDA4ODg5Njc2OUMwLDAuMjkzNzA0NDQ0ODM4NSwwLDAsMCwwWiIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSIjZTVkZWZmIiBvcGFjaXR5PSIwLjA3NSIvPjwvc3ZnPg==')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
