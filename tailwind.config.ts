import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C49A2C',
        'primary-dark': '#A6821E',
        navy: '#1B3558',
        'navy-light': '#243F6B',
        steel: '#4A7FA8',
        dark: '#111827',
        'body-text': '#4B5563',
        muted: '#9CA3AF',
        surface: '#F9F8F5',
        'border-col': '#E5E2D9',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
