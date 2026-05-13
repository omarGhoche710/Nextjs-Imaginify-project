# Clerk — Authentication Service

## What is Clerk?
Clerk is a ready-made **authentication service** — it gives you login, signup, and user management without building it yourself.

---

## What Clerk Replaces

Without Clerk you'd have to build all of this manually:

```
- Login page
- Signup page
- Session management
- JWT tokens
- Password hashing
- OAuth (Google, GitHub, etc.)
- User profile management
```

With Clerk — all of this comes out of the box.

---

## How can i build my `SignIn`

![alt text](image.png)
- Then follow the instructions
- We can also sign in with username

![alt text](image-1.png)

### 1. Contact Information

* **Email address**: Set to **Required**.
* **Verification**: Users must verify their email at sign-up.
* **Sign-in**: This field is used for signing in.

### 2. Username

* **Username**: Set to **Required**.
* **Sign-in**: This field is also used for signing in.
* **Uniqueness**: Each user must have a unique username.

### 3. Disabled Options

* **Phone number**: This option is currently turned **Off**.

> **Note:** Because both Email and Username are marked as **Required**, new users will see two separate input fields during the sign-up process and must provide both to create an account.

---

## How it Works in Next.js

### 1. Wrap your app with ClerkProvider

```tsx
// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```

### 2. Protect routes with middleware

```ts
// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()
```

### 3. Use built-in components

```tsx
import { SignIn, SignUp, UserButton } from '@clerk/nextjs'

// Ready-made sign in page
<SignIn />

// Ready-made sign up page  
<SignUp />

// User avatar with dropdown (logout, profile, etc.)
<UserButton />
```

---

## Get Current User

```tsx
import { currentUser } from '@clerk/nextjs/server'

const user = await currentUser()
console.log(user.id)
console.log(user.emailAddresses)
```

---

## Summary

| Feature | Without Clerk | With Clerk |
|---|---|---|
| Login/Signup | Build from scratch | Ready-made UI |
| Sessions | Manual JWT | Handled automatically |
| OAuth | Complex setup | One line config |
| User management | Build dashboard | Built-in |