import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0B0D10',
        'dark-secondary': '#111827',
        'card-dark': '#161B22',
        'card-darker': '#1A1D24',
        'accent-teal': '#14B8A6',
        'accent-cyan': '#06B6D4',
        'accent-light-cyan': '#22D3EE',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'glowPulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.5), inset 0 0 20px rgba(20, 184, 166, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.8), inset 0 0 20px rgba(20, 184, 166, 0.2)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        orbit: {
          'from': { transform: 'rotateZ(0deg)' },
          'to': { transform: 'rotateZ(360deg)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
