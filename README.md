# ☕ ChaiCSS

A lightweight, utility-first CSS engine built using JavaScript.

ChaiCSS allows developers to write expressive `chai-*` utility classes directly in HTML, which are dynamically converted into inline styles at runtime.

---

## 🚀 Features

* Utility-first CSS system
* Config-driven architecture (easy to extend)
* Supports core CSS domains:

  * Typography
  * Layout (Flexbox)
  * Positioning
  * Box Model
* Multi-property utilities (e.g., `px`, `py`)
* Custom reusable components (buttons, cards, titles)
* Automatic removal of processed classes
* Lightweight and dependency-free

---

## 📦 Installation

```bash
npm install @vickyxcodes/chai-wind
```

---

## 🛠️ Usage

```js
import { initChaiCSS } from "@vickyxcodes/chai-wind";

document.addEventListener("DOMContentLoaded", () => {
  initChaiCSS();
});
```

---

## 🧪 Example

```html
<div class="chai-p-20 chai-bg-black chai-c-white chai-text-center">
  Hello World
</div>
```

### Output

```html
<div style="padding: 20px; background-color: black; color: white; text-align: center;">
  Hello World
</div>
```

---

## 🎨 Supported Utilities

### Colors

```html
chai-c-red
chai-bg-black
```

---

### Spacing

```html
chai-p-10        → padding: 10px
chai-m-20        → margin: 20px
chai-px-10       → padding-left & right
chai-py-5        → padding-top & bottom
```

---

### Typography

```html
chai-fs-20       → font-size: 20px
chai-fw-bold     → font-weight: bold
chai-text-center → text-align: center
chai-lh-1.5      → line-height
```

---

### Layout (Flexbox)

```html
chai-d-flex
chai-justify-center
chai-align-center
chai-gap-10
```

---

### Size

```html
chai-w-200
chai-h-100
chai-minw-100
chai-maxh-300
```

---

### Positioning

```html
chai-pos-absolute
chai-top-10
chai-left-20
chai-z-10
```

---

### Borders

```html
chai-rounded-10
chai-border-2
```

---

### Overflow

```html
chai-overflow-hidden
```

---

### Visual Effects

```html
chai-opacity-0.5
chai-shadow-0 4px 10px rgba(0,0,0,0.2)
```

---

## 🔥 Component Utilities

ChaiCSS also includes reusable UI-style utilities:

---

### Title

```html
<h1 class="chai-title">Title</h1>
```

---

### Description

```html
<p class="chai-description">Description text</p>
```

---

### Button

```html
<button class="chai-btn-primary">Click Me</button>
```

---

### Card

```html
<div class="chai-card">
  <h2 class="chai-card-title">Card Title</h2>
  <p>Content</p>
</div>
```

---

## 🧠 How It Works

1. Traverses the DOM after page load
2. Identifies all classes starting with `chai-`
3. Parses class names into CSS properties and values
4. Applies inline styles dynamically
5. Removes processed classes from the DOM

---

## 🏗️ Project Structure

```txt
src/
  extract.js   → DOM traversal and engine
  parser.js    → class parsing logic
  map.js       → utility configuration
  utils.js     → helper functions
```

---

## 💡 Design Approach

The system is designed with a clear separation of concerns:

* Parsing logic is independent of styling rules
* Styling rules are defined in a centralized configuration (`map.js`)
* DOM manipulation is handled separately in the engine

This makes the system scalable, maintainable, and easy to extend.

---

## 🧠 Inspiration

Inspired by utility-first frameworks like Tailwind CSS.

---

## 🚀 Future Improvements

* Responsive utilities (e.g., `md:`, `lg:`)
* State-based styles (hover, focus)
* Theme system
* Dark mode support
* Animation utilities

---

## 👨‍💻 Author

Vicky Gupta

---

## 🏁 Conclusion

ChaiCSS demonstrates how a scalable, utility-first CSS engine can be built from scratch using JavaScript, with a strong focus on modular architecture, extensibility, and real-world usability.
