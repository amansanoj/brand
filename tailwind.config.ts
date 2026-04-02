import type { Config } from 'tailwindcss'

// ─────────────────────────────────────────────────────────────
//  Design Tokens — tailwind.config.ts
//  shadcn/ui-compatible. CSS variables are defined in globals.css.
//  Usage in each project:
//    import brand from '@amansanoj/brand/tailwind'
//    export default { ...brand, content: ['./src/**/*.{ts,tsx}'] }
// ─────────────────────────────────────────────────────────────

const config: Config = {
  darkMode: 'class',

  content: [],

  theme: {
    extend: {

      // ── Colors (CSS variable references — see globals.css) ───
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: {
          '50':  'var(--text-50)',
          '100': 'var(--text-100)',
          '200': 'var(--text-200)',
          '300': 'var(--text-300)',
          '400': 'var(--text-400)',
          '500': 'var(--text-500)',
          '600': 'var(--text-600)',
          '700': 'var(--text-700)',
          '800': 'var(--text-800)',
          '900': 'var(--text-900)',
          '950': 'var(--text-950)',
        },
        primary: {
          '50':  'var(--primary-50)',
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
          '950': 'var(--primary-950)',
        },
        secondary: {
          '50':  'var(--secondary-50)',
          '100': 'var(--secondary-100)',
          '200': 'var(--secondary-200)',
          '300': 'var(--secondary-300)',
          '400': 'var(--secondary-400)',
          '500': 'var(--secondary-500)',
          '600': 'var(--secondary-600)',
          '700': 'var(--secondary-700)',
          '800': 'var(--secondary-800)',
          '900': 'var(--secondary-900)',
          '950': 'var(--secondary-950)',
        },
        accent: {
          '50':  'var(--accent-50)',
          '100': 'var(--accent-100)',
          '200': 'var(--accent-200)',
          '300': 'var(--accent-300)',
          '400': 'var(--accent-400)',
          '500': 'var(--accent-500)',
          '600': 'var(--accent-600)',
          '700': 'var(--accent-700)',
          '800': 'var(--accent-800)',
          '900': 'var(--accent-900)',
          '950': 'var(--accent-950)',
        },
      },

      // ── Typography ──────────────────────────────────────────
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
        mono:    ['Open Sans', 'monospace'],
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

      // ── Border Radius (shadcn/ui convention) ─────────────────
      borderRadius: {
        none:    '0',
        sm:      'calc(var(--radius) - 4px)',
        DEFAULT: 'var(--radius)',
        md:      'calc(var(--radius) - 2px)',
        lg:      'var(--radius)',
        xl:      'calc(var(--radius) + 4px)',
        '2xl':   'calc(var(--radius) + 8px)',
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