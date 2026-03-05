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
        background:   'var(--background)',
        foreground:   'var(--foreground)',
        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT:    'var(--primary)',
          foreground: 'var(--primary-foreground)',
          light:      'var(--primary-light)',
          dark:       'var(--primary-dark)',
          ring:       'var(--primary-ring)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT:    'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input:  'var(--input)',
        ring:   'var(--ring)',
        chart: {
          '1': 'var(--chart-1)',
          '2': 'var(--chart-2)',
          '3': 'var(--chart-3)',
          '4': 'var(--chart-4)',
          '5': 'var(--chart-5)',
        },
        sidebar: {
          DEFAULT:              'var(--sidebar)',
          foreground:           'var(--sidebar-foreground)',
          primary:              'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent:               'var(--sidebar-accent)',
          'accent-foreground':  'var(--sidebar-accent-foreground)',
          border:               'var(--sidebar-border)',
          ring:                 'var(--sidebar-ring)',
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