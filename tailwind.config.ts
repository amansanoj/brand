import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────
//  Design Tokens — tailwind.config.ts
//  Single source of truth for all projects.
//  Usage in each project:
//    import brand from '@amansanoj/brand/tailwind'
//    export default { ...brand, content: ['./src/**/*.{ts,tsx}'] }
// ─────────────────────────────────────────────────────────────

const config: Config = {
  darkMode: 'class',

  content: [],

  theme: {
    extend: {

      // ── Colors ──────────────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: '#156bb3',
          light:   '#3d8fd1',
          dark:    '#0e4f87',
          subtle:  '#e8f2fb',
        },
        accent: {
          DEFAULT: '#ea944c',
          light:   '#f0b07a',
          dark:    '#c8712a',
          subtle:  '#fdf1e8',
        },
        neutral: {
          0:   '#ffffff',
          50:  '#f5f5f5',
          100: '#e8e8e8',
          200: '#d0d0d0',
          400: '#9a9a9a',
          600: '#5a5a5a',
          800: '#2e2e2e',
          900: '#191919',
        },
        success: '#2d9e6b',
        warning: '#e6a817',
        error:   '#d94f4f',
        bg: {
          light: '#ffffff',
          dark:  '#191919',
        },
      },

      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        display: ['Rubik', 'sans-serif'],
        body:    ['Rubik', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        xs:  ['0.75rem',  { lineHeight: '1rem' }],
        sm:  ['0.875rem', { lineHeight: '1.25rem' }],
        md:  ['1rem',     { lineHeight: '1.5rem' }],
        lg:  ['1.125rem', { lineHeight: '1.75rem' }],
        xl:  ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem',  letterSpacing: '-0.02em' }],
        '5xl': ['3rem',     { lineHeight: '1.15',    letterSpacing: '-0.03em' }],
        '6xl': ['3.75rem',  { lineHeight: '1.1',     letterSpacing: '-0.03em' }],
      },

      letterSpacing: {
        tight:  '-0.03em',
        normal: '0em',
        wide:   '0.06em',
        wider:  '0.12em',
      },

      lineHeight: {
        tight:  '1.2',
        normal: '1.5',
        loose:  '1.8',
      },

      // ── Spacing ─────────────────────────────────────────────
      spacing: {
        section:   '5rem',
        container: '6rem',
      },

      // ── Border Radius ────────────────────────────────────────
      borderRadius: {
        none:    '0',
        sm:      '0.25rem',
        DEFAULT: '0.5rem',
        md:      '0.5rem',
        lg:      '0.75rem',
        xl:      '1rem',
        '2xl':   '1.5rem',
        full:    '9999px',
      },

      // ── Shadows ──────────────────────────────────────────────
      boxShadow: {
        sm:      '0 1px 3px rgba(0,0,0,0.08)',
        DEFAULT: '0 4px 12px rgba(0,0,0,0.10)',
        md:      '0 4px 12px rgba(0,0,0,0.10)',
        lg:      '0 8px 24px rgba(0,0,0,0.12)',
        xl:      '0 16px 48px rgba(0,0,0,0.14)',
        primary: '0 4px 20px rgba(21,107,179,0.25)',
        accent:  '0 4px 20px rgba(234,148,76,0.25)',
        none:    'none',
      },

      // ── Transitions ──────────────────────────────────────────
      transitionDuration: {
        fast:   '150ms',
        normal: '250ms',
        slow:   '400ms',
      },

      // ── Z-Index ──────────────────────────────────────────────
      zIndex: {
        base:    '0',
        raised:  '10',
        overlay: '100',
        modal:   '200',
        toast:   '300',
      },

      // ── Max Width ────────────────────────────────────────────
      maxWidth: {
        container: '1100px',
        prose:     '68ch',
        narrow:    '48ch',
      },

    },
  },

  plugins: [],
}

export default config