![OG Image](https://repo-og-generator.vercel.app/brand?description=Personal%20brand%20system%20-%20shadcn%2Fui-%20compatible%20design%20tokens%2C%20logos%2C%20fonts%2C%20headshots%2C%20and%20shared%20assets&variant=accent&scale=2)

## Index
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [License](#license)

## Features
- Provides a centralized personal brand system containing logos, fonts, headshots, and shared assets
- Ships with shadcn/ui-compatible design tokens for seamless React/UI integration
- Includes light and dark mode custom CSS properties out of the box
- Offers base color tokens in OKLCH, RGB, and HEX formats accessible via a machine-readable JSON file
- Exports a pre-configured Tailwind configuration wired directly to the brand's CSS variables

## Project Structure
```text
.
├── .gitignore
├── README.md
├── assets/
├── bun.lock
├── globals.css
├── index.ts
├── package-lock.json
├── package.json
├── tailwind.config.ts
├── tokens.json
└── tsconfig.json
```
`globals.css` serves as the source of truth for custom properties, while `tokens.json` acts as a machine-readable reference for the light and dark color values.

## Usage
Install the brand package in your project using bun:

```sh
bun add @amansanoj/brand
```

### 1. Import CSS variables
**Via Bundler/Framework:**
In your project's global stylesheet (e.g. `app.css` or `globals.css`), import the base styles. This sets all `--token` custom properties on `:root` (light mode) and `.dark` (dark mode):

```css
@import '@amansanoj/brand/globals.css';
```

**Via CDN (Plain HTML):**
If you are working with static HTML files without a build step, you can include the CSS directly in your `<head>` using a CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@amansanoj/brand/globals.css">

<link rel="stylesheet" href="https://unpkg.com/@amansanoj/brand/globals.css">
```

*(Note: `globals.css` already imports Instrument Sans, Geist, and Geist Mono from Google Fonts. No additional `<link>` tags are needed for the fonts in your HTML.)*

### 2. Add the Tailwind config
Wire up your project's `tailwind.config.ts` to utilize the brand configurations. All color utilities (`bg-primary`, `text-foreground`, `border-border`, etc.) will resolve to the CSS variables automatically:

```typescript
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

### 3. Import assets
You can easily import static assets directly from the package where needed:

```typescript
import headshot from '@amansanoj/brand/images/headshots/main.jpg'
```

## License
**Proprietary & Closed Source**

This repository and all of its contents—including but not limited to icons, headshots, logos, and specific design assets—are the sole property of the author. **This is not an open-source project.** You may not copy, reproduce, distribute, publish, display, perform, modify, create derivative works, or in any way exploit any part of this repository without explicit written permission.
