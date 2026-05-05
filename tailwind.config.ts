import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2EDE4',
        'paper-raised': '#EDE7DC',
        'paper-deep': '#E5DDD0',
        ink: '#14110C',
        'ink-secondary': '#5C5650',
        'ink-tertiary': '#9A9188',
        rule: '#C8C2B8',
        'stamp-red': '#C8382A',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        baskerville: ['var(--font-baskerville)', 'Georgia', 'serif'],
        courier: ['var(--font-courier)', 'Courier New', 'monospace'],
        'special-elite': ['var(--font-special-elite)', 'cursive'],
      },
      maxWidth: {
        content: '1100px',
      },
      letterSpacing: {
        label: '0.12em',
        wide: '0.15em',
      },
    },
  },
  plugins: [],
}

export default config
