import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1B2540',
        gold: '#C8922A',
        'off-white': '#F7F5F0',
        'site-white': '#FFFFFF',
        'site-text': '#1A1A1A',
        muted: '#6B6560',
        border: '#E5E0D8',
      },
    },
  },
  plugins: [],
}

export default config
