### 1. Why should we use shadcn/ui?
- **Full Ownership:** Since the code lives in your `components/ui` folder, you own it. You can change the logic or the style directly without being restricted by library updates.
- **Zero Bundle Bloat:** You only add the components you actually use. If you only need a Button, your project only contains the Button code.
- **Accessibility:** It follows WAI-ARIA standards out of the box, ensuring your app is usable by everyone.
- **Design System Consistency:** It uses a `globals.css` file with CSS variables, making it incredibly easy to switch between Light and Dark mode.

---

### 2. The `cn` Utility in Next.js (shadcn/ui)
It combines two powerful libraries:
- **clsx:** Allows you to add classes conditionally (e.g., `condition && 'class'`).
- **tailwind-merge:** Automatically resolves conflicts between Tailwind classes (e.g., if you provide two different background colors).
- **Rule of thumb**: if there's no condition or variable involved, a plain string is enough.

---

### 3. Wrapp the Clerk Provider in the RootLayout
we make that to know wich pages we can't access and to be able to get access to the user data within all the pages no matter where we at...

---

### 3. Sign Out Rediraction
we put the redirect url for sign-out is '/' not 'sign-in' because the middleware controls that.

---

### 4. Check Auth in Clerk v7
| | Server Component | Client Component |
|---|---|---|
| Hook | `auth()` | `useAuth()` |
| Import | `@clerk/nextjs/server` | `@clerk/nextjs` |
| Async | ✅ `await` | ❌ no await |
| Logged in | `userId` has value | `userId` has value |
| Not logged in | `userId` is `null` | `userId` is `null` |


