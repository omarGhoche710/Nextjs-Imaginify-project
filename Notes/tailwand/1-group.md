## `group` — Tailwind Note

---

### What it is
`group` lets the **parent control the styles of its children** on hover, focus, or active states.

---

### Without `group` — each element handles itself:
```tsx
<div>
  <img className="hover:brightness-200" />  // only triggers when hovering the img
  <p className="hover:text-white">Home</p>  // only triggers when hovering the p
</div>
```

---

### With `group` — parent controls everything:
```tsx
<div className="group">
  <img className="group-hover:brightness-200" />  // triggers when hovering the div
  <p className="group-hover:text-white">Home</p>  // triggers when hovering the div
</div>
```

---

### How it works
```
User hovers over parent (group)
        ↓
All children with group-hover: react together
        ↓
✅ Consistent hover effect across all children
```

---

### Real use case — Sidebar link:
```tsx
<Link className="group sidebar-link">
  <Image
    className="group-hover:brightness-200"  // image brightens
  />
  <p className="group-hover:text-white">    // text turns white
    Home
  </p>
</Link>
```
Hovering anywhere on the `<Link>` → image AND text change together. 🎯

---

### Common `group-*` variants

| Class | Triggers when parent is |
|---|---|
| `group-hover:` | hovered |
| `group-focus:` | focused |
| `group-active:` | clicked |
| `group-disabled:` | disabled |

---

### Rule of thumb
> Use `group` when hovering one element should affect multiple children at the same time. 🎯