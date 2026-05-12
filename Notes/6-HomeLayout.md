# 🏗️ Imaginify Layout Structure

This layout uses a nested three-layer system to manage the **Sidebar** (Desktop) and **Navbar** (Mobile) while keeping content centered.

### 1. `root` (The Shell)

* **Purpose**: The main container for the entire application layout.
* **Behavior**: Uses `flex-col` for mobile and switches to `lg:flex-row` to place the Sidebar and Content side-by-side on large screens.

### 2. `root-container` (The Content Area)

* **Purpose**: The actual space where page content is rendered.
* **Behavior**:
* Uses `flex-1` to occupy all remaining space next to the Sidebar.
* Includes `overflow-auto` for independent scrolling.
* Adds top margin (`mt-16`) on mobile to prevent overlap with the top Navbar.



### 3. `wrapper` (The Constraints)

* **Purpose**: Ensures content looks professional and is easy to read.
* **Behavior**:
* `max-w-5xl`: Limits content width so it doesn't stretch too far on wide monitors.
* `mx-auto`: Centers the content perfectly.
* `px-5`: Adds breathing room (padding) on the sides.



---

### 📂 Code Hierarchy

```html
<main class="root">
  <!-- Sidebar/Navbar Component goes here -->
  
  <div class="root-container">
    <div class="wrapper">
      {children} 
    </div>
  </div>
</main>
