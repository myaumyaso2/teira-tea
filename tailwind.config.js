/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teira: {
          emerald: '#035224',
          'emerald-dark': '#023818',
          'emerald-light': '#0a6c32',
          olive: '#89AA3E',
          'olive-light': '#a5c853',
          'olive-dark': '#6d882f',
          terracotta: '#D4583D',
          'terracotta-hover': '#bd4b32',
          sand: '#EEE1D5',
          'sand-light': '#FAF7F2',
          'sand-warm': '#F3ECE3',
          'sand-dark': '#D9C8B8',
          gold: '#C9A456',
          'gold-light': '#e2be72',
          graphite: '#121A14',
          muted: '#667069',
          border: '#E2D7CC',
        }
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(3, 82, 36, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -4px rgba(18, 26, 20, 0.07), 0 4px 8px -2px rgba(0, 0, 0, 0.03)',
        'drawer': '-10px 0 40px -5px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      },
      animation: {
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
