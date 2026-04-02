![OG Image](https://repo-og-generator.vercel.app/brand?description=Personal+brand+system+%E2%80%94+shadcn%2Fui-compatible+design+tokens%2C+logos%2C+fonts%2C+headshots%2C+and+shared+assets+used+across+all+my+projects&scale=2)

## Contents
- `globals.css` — CSS custom properties for light & dark mode (shadcn/ui convention)
- `tailwind.config.ts` — Tailwind config wired to CSS variables
- `tokens.json` — machine-readable token reference (light + dark)
- `assets/` — logo SVG
- `images/` — headshots, open graph images

## Tokens
Base color tokens are available in both OKLCH and HEX formats via `tokens.json`.

### Base OKLCH (`color.light.base` / `color.dark.base`)

| Token | Light | Dark |
|---|---|---|
| `text` | `oklch(21.34% 0.000 89.88)` | `oklch(98.51% 0.000 89.88)` |
| `background` | `oklch(98.51% 0.000 89.88)` | `oklch(21.34% 0.000 89.88)` |
| `primary` | `oklch(62.97% 0.127 246.14)` | `oklch(62.97% 0.127 246.14)` |
| `secondary` | `oklch(80.53% 0.102 60.76)` | `oklch(80.53% 0.102 60.76)` |
| `accent` | `oklch(69.51% 0.072 98.82)` | `oklch(69.51% 0.072 98.82)` |

### Base HEX (`color.hex.light.base` / `color.hex.dark.base`)

| Token | Light | Dark |
|---|---|---|
| `text` | `#191919` | `#fafafa` |
| `background` | `#fafafa` | `#191919` |
| `primary` | `#3d8fd1` | `#3d8fd1` |
| `secondary` | `#f0b07a` | `#f0b07a` |
| `accent` | `#a89e69` | `#a89e69` |

### Other globals

| Token | Value |
|---|---|
| Radius | `0.5rem` |
| Font sans/serif | `Open Sans` |
| Font mono | `Open Sans` |

See `globals.css` and `tokens.json` for the full token list and scales.

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
`globals.css` already imports Open Sans from Google Fonts. No additional `<link>` tags needed.
