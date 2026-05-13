## Project Structure Notes

---

## `components/shared`

### What it is
A folder for components that are **reused across multiple pages** — not specific to one page.

```
components/
└── shared/
    ├── Sidebar.tsx      ← used in every page
    ├── Navbar.tsx       ← used in every page
    ├── Header.tsx       ← used in multiple pages
    └── MobileNav.tsx    ← used in multiple pages
```

---

### Why `shared`?
```
components/
├── shared/          ← reusable everywhere
│   ├── Sidebar.tsx
│   └── Navbar.tsx
│
└── ui/              ← small reusable UI pieces (buttons, inputs)
    ├── button.tsx
    └── input.tsx
```

| Folder | Used for |
|---|---|
| `shared/` | Full components reused across pages |
| `ui/` | Small UI pieces (shadcn, buttons) |

---

### Rule of thumb
> If more than one page uses it → it goes in `shared/` 🔁

---
---

## `constants/index.ts`

### What it is
A file that holds **fixed data that never changes** — no logic, just values.

```ts
// constants/index.ts
export const navLinks = [
  { label: 'Home', href: '/', icon: '/assets/icons/home.svg' },
  { label: 'Restore', href: '/restore', icon: '/assets/icons/restore.svg' },
  { label: 'Fill', href: '/fill', icon: '/assets/icons/fill.svg' },
]

export const plans = [
  { name: 'Free', price: 0, credits: 20 },
  { name: 'Pro', price: 40, credits: 120 },
]
```

---

### Why a separate file?

```tsx
// ❌ Bad — data mixed with component logic
const Sidebar = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Restore', href: '/restore' },
    // ... 10 more items
  ]
  return (
    <aside>
      {links.map(link => <Link href={link.href}>{link.label}</Link>)}
    </aside>
  )
}
```

```tsx
// ✅ Good — clean separation
import { navLinks } from '@/constants'

const Sidebar = () => {
  return (
    <aside>
      {navLinks.map(link => <Link href={link.href}>{link.label}</Link>)}
    </aside>
  )
}
```

---

### Benefits

| | Without `constants/` | With `constants/` |
|---|---|---|
| **Reuse** | Copy paste everywhere | Import once |
| **Edit** | Change in 10 places | Change in 1 place |
| **Readability** | Component is cluttered | Component is clean |

---

### Rule of thumb
> If the data is fixed and used in more than one place → it goes in `constants/index.ts` 📌