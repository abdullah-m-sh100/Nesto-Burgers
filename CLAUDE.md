# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built bundle
- `npm run lint` — run Oxlint (config in `.oxlintrc.json`)

There is no test runner configured.

## Architecture

Nesto Burgers is a bilingual (Arabic/English) burger-restaurant storefront: React 19 + Vite + React Router 7, plain JavaScript (JSX, no TypeScript). Tailwind v4 is installed via `@tailwindcss/vite`, but styling is mostly hand-written CSS: global design tokens (CSS variables such as `--color-primary`, spacing, font sizes) live in `src/index.css`, and each page/component has a sibling `.css` file.

`src/App.jsx` nests `LanguageProvider` > `CartProvider` > `Router`, and renders Navbar, the routed pages, Footer, `CartModal` and a floating cart button on every route. Routes: `/`, `/menu`, `/offers`, `/about`, `/gallery`, `/reviews`, `/contact`.

### Cross-cutting state (src/context)

- **LanguageContext** — `language` is `"ar"` (default) or `"en"`, persisted in localStorage (`Nesto_lang`). Changing it also sets `<html lang>`, `<html dir>` (RTL for Arabic) and `document.title`. UI text comes from `t("section.key")`, which resolves dotted paths in `src/data/translations.js` and returns the key itself if missing. Any new UI string needs entries in both `en` and `ar` there.
- **CartContext** — cart items persisted in localStorage (`Nesto_cart`); exposes add/remove/updateQuantity/clear, `getCartCount`, `getCartTotal` (returns a string from `toFixed(2)`), and the open/close state for `CartModal`.

### Data (src/data)

`products.js` is the static menu catalog (no backend). Each product has an `id`, `category`, bilingual `name`/`description` objects (`{ en, ar }`), `price`, an imported `image` from `src/assets/products/`, and flags like `isBestseller`/`isSpicy`. Components pick the localized field using `language`.

### Notes

- The UI uses Font Awesome classes (`fa-solid ...`) in markup; check `index.html` for how they are loaded.
- `axios` is a dependency but is not currently used anywhere.
