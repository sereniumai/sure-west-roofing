import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#D4AF60',
        'accent-dark': '#B8943F',
        dark: '#000000',
        'dark-deep': '#111111',
        'dark-card': '#2A2A2A',
        light: '#F5F5F5',
        cream: '#FFFCFC',
        'warm-cream': '#FFFBF5',
        'body-text': '#666666',
        'body-text-light': '#999999',
        'border-col': '#E5E5E5',
        surface: '#F5F5F5',
        primary: '#D4AF60',
        'primary-dark': '#B8943F',
        navy: '#000000',
        'navy-light': '#2A2A2A',
        'glass-white': 'rgba(255,255,255,0.1)',
        'hover-blue': 'rgb(153,238,255)',
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
