import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'dancing': ['var(--font-dancing)', 'cursive'],
        'cinzel': ['var(--font-cinzel)', 'serif'],
      },
      colors: {
        wedding: {
          // Minimalist beige wedding palette
          primary: '#F5F1EB',      // Warm off-white
          secondary: '#E8DDD4',    // Light beige
          accent: '#D4C4B0',       // Medium beige
          warm: '#C7B299',         // Warm beige
          neutral: '#A69080',      // Neutral brown
          pastel: '#5c81a2',       // Pastel blue for texts and icons
          // Light mode colors (beige-based)
          light: {
            bg: '#FEFCFA',         // Warm white
            card: '#F9F6F1',       // Light cream
            text: '#4A3728',       // Dark brown
            muted: '#8B7355',      // Medium brown
            border: '#E8DDD4',     // Light beige border
            accent: '#D4C4B0',     // Beige accent
          },
          // Dark mode colors (elegant dark with warm tones)
          dark: {
            bg: '#0F0E0C',         // Deep warm black
            card: '#1C1916',       // Rich dark brown
            text: '#F5F1EB',       // Warm cream text
            muted: '#A69080',      // Soft beige
            border: '#2D2520',     // Subtle dark border
            accent: '#D4A574',     // Golden beige accent
          },
          // Strong colors for dress code
          dress: {
            yellow: '#F6E05E',     // Strong yellow
            green: '#48BB78',      // Strong green
            pink: '#ED64A6',       // Strong pink
            purple: '#9F7AEA',     // Strong purple
            orange: '#ED8936',     // Strong orange
            gray: '#718096',       // Strong gray
          }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
