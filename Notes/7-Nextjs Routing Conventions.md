# Next.js Routing Conventions

## Basic Rule
The folder structure = the URL.

```
app/transformations/page.tsx              → /transformations
app/transformations/[id]/page.tsx         → /transformations/123
app/transformations/[id]/update/page.tsx  → /transformations/123/update
app/transformations/add/[type]/page.tsx   → /transformations/add/restore
```

---

## Plural vs Singular Naming

| Page | Name | Why |
|---|---|---|
| `/transformations` | `TransformationsPage` | List of many → plural (s) |
| `/transformations/123` | `TransformationPage` | One item → singular |
| `/transformations/123/update` | `UpdateTransformationPage` | One item → singular |

---

## `add/[type]` vs `[id]/update`

### `add/[type]`
Action comes first because you don't have an ID yet — you're creating something new.

```
/transformations/add/restore    → add a restore transformation
/transformations/add/remove-bg  → add a remove background transformation
/transformations/add/recolor    → add a recolor transformation
```

Real world example (Amazon):
```
/products/add/electronics
/products/add/clothing
/products/add/furniture
```

### `[id]/update`
ID comes first because you need to know **which** item you're editing before the action.

```
/transformations/123/update  ✅ find it first, then edit
/transformations/update/123  ❌ doesn't make sense
```

---

## Summary

- **List page** → plural name, no dynamic segment
- **Detail page** → singular name, `[id]` segment
- **Add page** → action first, type second (`add/[type]`)
- **Update page** → ID first, action second (`[id]/update`)