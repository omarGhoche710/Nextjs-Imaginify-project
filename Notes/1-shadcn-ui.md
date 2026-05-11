# shadcn/ui: The Modern Component Collection

### 1. What is it?
Unlike traditional component libraries (like MUI or Ant Design), **shadcn/ui** is not a dependency you install via `npm install`. It is a **collection of re-usable components** that you copy and paste into your apps. 

It is built on top of:
- **Radix UI:** Handles the logic, accessibility, and keyboard navigation.
- **Tailwind CSS:** Handles all the styling and theming.



---

### 2. Why should we use it?
- **Full Ownership:** Since the code lives in your `components/ui` folder, you own it. You can change the logic or the style directly without being restricted by library updates.
- **Zero Bundle Bloat:** You only add the components you actually use. If you only need a Button, your project only contains the Button code.
- **Accessibility:** It follows WAI-ARIA standards out of the box, ensuring your app is usable by everyone.
- **Design System Consistency:** It uses a `globals.css` file with CSS variables, making it incredibly easy to switch between Light and Dark mode.

---

### 3. How to implement it?

#### Step 1: Initialization
Run the CLI to set up your project (it will ask about your Tailwind config and paths):
```bash
npx shadcn@latest init

```

#### Step 2: Adding a Component

You don't download the whole library. You "add" specific components as you need them:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog

```

---

### 4. Example of use

Once you've added a component, you import it from your local folder like any other file you created.

**Implementation in a Page:**

```tsx
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function BookingPage() {
  const isLoading = true;

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-2xl font-bold">Activio Booking</h1>
      
      
      <Button variant="outline">Cancel</Button>
      
      <Button disabled="{isLoading}">
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
        Confirm Activity
      </Button>
    </div>
  )
}

```

