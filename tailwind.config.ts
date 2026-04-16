import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#D4AF60',
        'brand-navy': '#2C4766',
        'brand-slate': '#5A7A9A',
        'brand-cream': '#F7F5F0',
        'brand-border': '#E8E8E8',
        accent: '#D4AF60',
        'accent-dark': '#B8943F',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
