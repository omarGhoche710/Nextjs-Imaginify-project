# Tailwind Layers & `cn()` Usage

## The 3 Tailwind Layers

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Priority order — utilities always win:
```
base → components → utilities
weak                    strong
```

---

### `@layer base`
Global styles that apply to HTML elements automatically — no class needed.

```css
@layer base {
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
}
```

---

### `@layer components`
Reusable UI component classes. In this project it's **empty** because shadcn handles components.

---

### `@layer utilities`
Custom helper classes used directly in HTML. These override shadcn styles because utilities have higher priority.

```css
@layer utilities {
  .flex-center { @apply flex justify-center items-center; }
  .button { @apply py-4 px-6 flex-center gap-3 rounded-full !important; }
}
```

The `!important` is extra insurance for cases where shadcn also uses `!important` internally.

---

## Using shadcn Button with Custom Styles

No need to rebuild the button from scratch — just pass the custom class:

```tsx
<Button className="button">
  Click me
</Button>
```

The `.button` class from `@layer utilities` overrides shadcn's default styles.

---

## When to Use `cn()`

`cn()` is only needed when merging classes **dynamically** (with conditions or variables).

```tsx
// ✅ Use cn — dynamic logic
<Button className={cn("button", isActive && "bg-purple-500")}>

// ✅ No cn needed — static classes
<Button className="button">
```

> Rule of thumb: if there's no condition or variable involved, a plain string is enough.