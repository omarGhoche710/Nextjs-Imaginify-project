# Next.js Font CSS Variables — How It Works

## The Two Classes Explained

When you load a font in Next.js using `next/font`, you get an object back with a `.variable` property. You need **both** pieces to make the font work properly with Tailwind.

```tsx
const IBMPlex = IBM_Plex_Sans({
  variable: '--font-ibm-plex', // defines the CSS variable name
  weight: ['400', '500', '600', '700'],
});

// In your layout:
<body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
```

---

## What Each One Does

| Class | What it does |
|---|---|
| `IBMPlex.variable` | Injects `--font-ibm-plex: 'IBM Plex Sans'` as a CSS variable on the element |
| `font-IBMPlex` | Applies `font-family: var(--font-ibm-plex)` via Tailwind |

---

## Why CSS Variables Instead of Direct `font-family`?

You might wonder: *why not just set `font-family` directly on the body?*

```css
/* ❌ works, but not flexible */
body {
  font-family: 'IBM Plex Sans', sans-serif;
}
```

### 1. Scoping & Flexibility
With CSS variables, you can apply different fonts to different sections easily:

```tsx
<div className="font-IBMPlex">IBM Plex here</div>
<div className="font-Cairo">Cairo here</div>
```

### 2. Multiple Fonts
You can register multiple fonts on the same element:

```tsx
<body className={cn(IBMPlex.variable, Cairo.variable)}>
  {/* both fonts available anywhere inside */}
</body>
```

### 3. Next.js Font Optimization
Next.js ensures the CSS variable is only defined **after the font has loaded**, preventing layout shifts (CLS).

---

## Why Both Are Needed on `<body>`

CSS variables **inherit** from parent to children automatically.
So putting `IBMPlex.variable` on `<body>` means every child element can *see* `--font-ibm-plex`.

But seeing ≠ using. The variable is just defined — nobody is using it yet.

```
All children can see:  --font-ibm-plex: 'IBM Plex Sans'
But nobody said:       font-family: var(--font-ibm-plex)  ← this is font-IBMPlex's job
```

`font-IBMPlex` (the Tailwind class) is what actually **applies** the font to the body and everything inside it.

---

## Tailwind Config

For `font-IBMPlex` to exist as a Tailwind class, it must be defined in `tailwind.config`:

```js
theme: {
  extend: {
    fontFamily: {
      IBMPlex: ['var(--font-ibm-plex)'],
    },
  },
},
```

---

## Summary

```
IBMPlex.variable  →  defines   --font-ibm-plex on the element
font-IBMPlex      →  consumes  var(--font-ibm-plex) as font-family
```

Both are required. One without the other doesn't work.