# Project Fixes — Imaginify

## The Problem
The project was built with **Tailwind v3** code but had **Tailwind v4** installed. This caused a chain of errors.

---

## Fix 1 — Downgrade Tailwind to v3

```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install tailwindcss@3 autoprefixer
```

- Removed Tailwind v4 and its PostCSS plugin
- Installed Tailwind v3 with autoprefixer

---

## Fix 2 — Update `postcss.config`

Renamed `postcss.config.mjs` → `postcss.config.js` and updated the content:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Why:
- `.mjs` was using v4 syntax (`@tailwindcss/postcss`)
- v3 needs `tailwindcss` directly as a PostCSS plugin
- `module.exports` works better than `export default` with PostCSS

---

## Fix 3 — Rename `tailwind.config.ts` → `tailwind.config.js`

The config was using `require()` which is CommonJS syntax — not compatible with `.ts` files.
Renaming to `.js` fixes the ESLint error and works correctly with `module.exports`.

---

## Fix 4 — Update `globals.css`

Reverted from v4 syntax back to v3:

```css
/* ✅ v3 syntax */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Instead of:

```css
/* ❌ v4 syntax — removed */
@import "tailwindcss/preflight";
@reference "tailwindcss";
@tailwind utilities;
```

---

## Fix 5 — Clear `.next` cache

After all changes, cleared the build cache:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## Root Cause Summary

| File | Was (v4) | Fixed to (v3) |
|---|---|---|
| `postcss.config` | `@tailwindcss/postcss` | `tailwindcss` + `autoprefixer` |
| `tailwind.config` | `.ts` with `import` | `.js` with `require` |
| `globals.css` | `@import` + `@reference` | `@tailwind base/components/utilities` |
| `tailwindcss` package | v4 | v3 |