# brand
Personal brand system — Tailwind design tokens, logos, fonts, headshots, and shared assets used across all my projects.

## Contents
- `tailwind.config.ts` — design tokens as a Tailwind config
- `tokens.json` — human-readable token reference
- `assets/` — logo SVG
- `images/` — headshots, open graph images

## Tokens
| Token | Value |
|---|---|
| Primary | `#156bb3` |
| Accent | `#ea944c` |
| BG Light | `#ffffff` |
| BG Dark | `#191919` |
| Font | Rubik, JetBrains Mono |

## Usage

Install in a project:
```bash
bun add -d ../brand
```

Then in your project's `tailwind.config.ts`:
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

Import assets:
```ts
import headshot from '@amansanoj/brand/images/headshots/main.jpg'
```

## Fonts
Add to your project's HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Add JetBrains Mono only in projects that need code blocks:
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```