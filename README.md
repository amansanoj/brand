![OG Image](https://repo-og-generator.vercel.app/brand?description=Personal+brand+system+%E2%80%94+shadcn%2Fui-compatible+design+tokens%2C+logos%2C+fonts%2C+headshots%2C+and+shared+assets+used+across+all+my+projects&scale=2)

## Contents
- `globals.css` — CSS custom properties for light & dark mode (shadcn/ui convention)
- `tailwind.config.ts` — Tailwind config wired to CSS variables
- `tokens.json` — machine-readable token reference (light + dark)
- `assets/` — logo SVG
- `images/` — headshots, open graph images

## Tokens
Base color tokens are available in OKLCH, RGB, and HEX formats via `tokens.json`.

### Base OKLCH (`color.light.base` / `color.dark.base`)

| Token | Light | Dark |
|---|---|---|
| `text` | `oklch(21.78% 0.000 89.88)` | `oklch(98.51% 0.000 89.88)` |
| `background` | `oklch(98.51% 0.000 89.88)` | `oklch(21.78% 0.000 89.88)` |
| `primary` | `oklch(62.97% 0.127 246.14)` | `oklch(62.97% 0.127 246.14)` |
| `secondary` | `oklch(80.34% 0.103 59.80)` | `oklch(80.34% 0.103 59.80)` |
| `accent` | `oklch(69.83% 0.072 98.81)` | `oklch(69.83% 0.072 98.81)` |

### Base RGB (`color.rgb.light.base` / `color.rgb.dark.base`)

| Token | Light | Dark |
|---|---|---|
| `text` | `rgb(26, 26, 26)` | `rgb(250, 250, 250)` |
| `background` | `rgb(250, 250, 250)` | `rgb(26, 26, 26)` |
| `primary` | `rgb(61, 143, 209)` | `rgb(61, 143, 209)` |
| `secondary` | `rgb(240, 175, 122)` | `rgb(240, 175, 122)` |
| `accent` | `rgb(169, 159, 106)` | `rgb(169, 159, 106)` |

### Base HEX (`color.hex.light.base` / `color.hex.dark.base`)

| Token | Light | Dark |
|---|---|---|
| `text` | `#1a1a1a` | `#fafafa` |
| `background` | `#fafafa` | `#1a1a1a` |
| `primary` | `#3d8fd1` | `#3d8fd1` |
| `secondary` | `#f0af7a` | `#f0af7a` |
| `accent` | `#a99f6a` | `#a99f6a` |

### Other globals

| Token | Value |
|---|---|
| Radius | `0.5rem` |
| Font display/body | `Instrument Sans` / `Geist` |
| Font mono | `Geist Mono` |

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
`globals.css` already imports Instrument Sans, Geist, and Geist Mono from Google Fonts. No additional `<link>` tags needed.
