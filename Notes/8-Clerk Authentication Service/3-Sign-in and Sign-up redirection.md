## Sign in and sign up redirect URLs for development environment
```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

---

## Clerk Redirect Flow Note

---

### After Sign Out
```
User clicks Sign Out
        ↓
redirected to /
        ↓
middleware checks: is user logged in?
        ↓
❌ Not logged in → redirects to /sign-in
```

---

### After Sign In
```
User signs in successfully
        ↓
redirected to /
        ↓
middleware checks: is user logged in?
        ↓
✅ Logged in → pass through to home page
```

---

### Why we only need one env variable
```env
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/
```
No need for extra logic — the **middleware is smart enough** to know:
- User is logged in → let them through ✅
- User is not logged in → send to `/sign-in` ❌

> The middleware acts as the decision maker — not the redirect URL itself. The URL just says where to go, the middleware decides what happens when you get there. 🔒