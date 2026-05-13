## Check Auth in Clerk v7

---

### Server Component
```tsx
import { auth } from '@clerk/nextjs/server'

const Page = async () => {
  const { userId } = await auth()

  if (!userId) return <p>Not logged in</p>
  return <p>Logged in ✅</p>
}
```

---

### Client Component
```tsx
'use client'
import { useAuth } from '@clerk/nextjs'

const Page = () => {
  const { userId } = useAuth()

  if (!userId) return <p>Not logged in</p>
  return <p>Logged in ✅</p>
}
```

---

### Rule of thumb
| | Server Component | Client Component |
|---|---|---|
| Hook | `auth()` | `useAuth()` |
| Import | `@clerk/nextjs/server` | `@clerk/nextjs` |
| Async | ✅ `await` | ❌ no await |
| Logged in | `userId` has value | `userId` has value |
| Not logged in | `userId` is `null` | `userId` is `null` |