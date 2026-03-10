![OG Image](https://repo-og-generator.vercel.app/brand?description=Personal+brand+system+%E2%80%94+shadcn%2Fui-compatible+design+tokens%2C+logos%2C+fonts%2C+headshots%2C+and+shared+assets+used+across+all+my+projects&scale=2)

## Contents
- `globals.css` — CSS custom properties for light & dark mode (shadcn/ui convention)
- `tailwind.config.ts` — Tailwind config wired to CSS variables
- `tokens.json` — machine-readable token reference (light + dark)
- `assets/` — logo SVG
- `images/` — headshots, open graph images

## Tokens
All colors are defined as `oklch` CSS custom properties. Key values:

| Token | Light | Dark |
|---|---|---|
| `--primary` | `oklch(0.5183 0.137 249.921)` | `oklch(0.5183 0.137 249.921)` |
| `--accent` | `oklch(0.7415 0.135 58.279)` | `oklch(0.7415 0.135 58.279)` |
| `--background` | `oklch(1 0 0)` | `oklch(0.2134 0 0)` |
| `--foreground` | `oklch(0.2134 0 0)` | `oklch(1 0 0)` |
| `--radius` | `0.5rem` | `0.5rem` |
| Font sans/serif | `Rubik` | — |
| Font mono | `JetBrains Mono` | — |

See `globals.css` for the full token list.

## Usage

Install in a project:
```bash
bun add @amansanoj/brand
```

### 1. Import CSS variables

In your project's global stylesheet (e.g. `app.css` / `globals.css`):
```css
@import '@amansanoj/brand/globals.css';
```

This sets all `--token` custom properties on `:root` (light) and `.dark` (dark mode).

### 2. Add the Tailwind config

In your project's `tailwind.config.ts`:
```ts
import type { Config } from 'tailwindcss'
import brand from '@amansanoj/brand/tailwind'

const config: Config = {
  ...brand,
  content: ['./src/**/*.{ts,tsx,svelte}'],
  theme: {
    ...brand.theme,
    extend: {
      ...brand.theme?.extend,
      // project-specific overrides here
    },
  },
}

export default config
```

All color utilities (`bg-primary`, `text-foreground`, `border-border`, etc.) will resolve to the CSS variables automatically.

### 3. Import assets
```ts
import headshot from '@amansanoj/brand/images/headshots/main.jpg'
```

## Fonts
`globals.css` already imports Rubik and JetBrains Mono from Google Fonts. No additional `<link>` tags needed.
