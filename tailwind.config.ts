import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  safelist: [
    'bg-primary',
    'bg-primary-dark',
    'bg-navy',
    'bg-navy-light',
    'bg-steel',
    'bg-surface',
    'text-primary',
    'text-navy',
    'text-steel',
    'text-dark',
    'text-body-text',
    'text-muted',
    'border-border-col',
    'border-primary',
  ],
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
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
