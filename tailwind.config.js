/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // primary
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        neon: {
          blue:   '#00d4ff',
          purple: '#a855f7',
          green:  '#22d3ee',
          pink:   '#f472b6',
        },
        dark: {
          900: '#040611',
          800: '#070b1a',
          700: '#0d1224',
          600: '#111827',
          500: '#1a2236',
          400: '#222d44',
          300: '#2d3a55',
        },
        glass: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          border:  'rgba(255,255,255,0.08)',
          hover:   'rgba(255,255,255,0.07)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-mesh': `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 50%, rgba(168,85,247,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 20% 80%, rgba(0,212,255,0.10) 0%, transparent 60%)
        `,
        'card-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(168,85,247,0.05) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #00d4ff 100%)',
      },
      boxShadow: {
        'glow-sm':     '0 0 12px rgba(99,102,241,0.3)',
        'glow-md':     '0 0 24px rgba(99,102,241,0.4)',
        'glow-lg':     '0 0 48px rgba(99,102,241,0.4)',
        'glow-purple': '0 0 24px rgba(168,85,247,0.4)',
        'glow-blue':   '0 0 24px rgba(0,212,255,0.3)',
        'glass':       '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg':    '0 16px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.08)',
      },
      animation: {
        'glow-pulse':  'glowPulse 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'spin-slow':   'spin 8s linear infinite',
        'fade-up':     'fadeUp 0.6s ease-out forwards',
        'orb-1':       'orbMove1 12s ease-in-out infinite',
        'orb-2':       'orbMove2 16s ease-in-out infinite',
        'orb-3':       'orbMove3 20s ease-in-out infinite',
        'marquee':     'marquee 30s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbMove1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(40px, -30px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        orbMove2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(-50px, 40px) scale(1.1)' },
          '66%':      { transform: 'translate(30px, -20px) scale(0.9)' },
        },
        orbMove3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(20px, -40px) scale(1.08)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
