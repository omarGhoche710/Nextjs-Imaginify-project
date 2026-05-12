## 🎨 Technical Note: Design System & Styling Architecture

This note summarizes the core concepts of the **Imaginify** project's styling structure, including accessibility standards and the CSS variable system.

---

### 1. Accessibility (WAI-ARIA)

* **Definition:** WAI-ARIA stands for *Web Accessibility Initiative – Accessible Rich Internet Applications*. It is a set of technical specifications that make web content more accessible to people with disabilities, especially those using **Screen Readers** or **Keyboard-only navigation**.
* **Shadcn/ui Role:** The components you install (like Dialogs, Selects, and Menus) follow these standards "out of the box."
* **Focus Management:** Automatically handles where the cursor/focus goes when you press `Tab`.
* **Aria Labels:** Hidden attributes tell the computer "This button closes the menu" or "This is a search input," ensuring a professional user experience for everyone.



### 2. Design System Consistency (globals.css)

* **The Concept:** Instead of hard-coding colors (e.g., `bg-[#3b82f6]`) everywhere in your code, the project uses **CSS Variables** defined in a central `globals.css` file.
* **Benefits:**
* **Single Source of Truth:** Change one variable in `globals.css`, and the entire project's color scheme updates instantly.
* **Dark Mode Integration:** The system is built with a `:root` (Light Mode) and a `.dark` class. Tailwind automatically switches variable values based on the active theme without you needing to rewrite individual components.



---

### 🛠️ Customizing Styles & Colors

You have full control over the look and feel of your project by modifying the values in `globals.css`.

* **Color Format (OKLCH):** Your project uses the **OKLCH** color space. It is a modern way to define colors that is more perceptually accurate and easier to manipulate than HEX or RGB.
* **Professional Tool:** Use **[oklch.com](https://oklch.com)** to pick your brand colors.
1. Select a color on the website.
2. Copy the generated code (e.g., `oklch(0.7 0.1 179)`).
3. Paste it into the corresponding variable in `globals.css` (e.g., replace the value of `--primary`).



### 📌 Key Rules for Modification:

* **Do Not Change Names:** Keep variable names like `--primary`, `--background`, or `--radius` exactly as they are. The pre-built Shadcn components are programmed to look for these specific names.
* **Update Values Only:** Change the numbers/colors assigned to those names to customize your UI.
* **Check Contrast:** If you change a `--background` color, ensure the `--foreground` (text color) remains readable.

