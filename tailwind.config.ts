import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#D4AF60',
        'accent-dark': '#B8943F',
        dark: '#1A1A1A',
        'dark-deep': '#111111',
        'dark-card': '#2A2A2A',
        light: '#F5F5F5',
        'body-text': '#666666',
        'body-text-light': '#999999',
        'border-col': '#E5E5E5',
        surface: '#F9F8F5',
        primary: '#D4AF60',
        'primary-dark': '#B8943F',
        navy: '#1A1A1A',
        'navy-light': '#2A2A2A',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
