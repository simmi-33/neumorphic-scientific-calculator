# 📱 Neumorphic Scientific Calculator

A modern, elegant, and fully responsive scientific calculator built with **HTML**, **CSS (Neumorphism Design)**, and **JavaScript**. Designed to feel like a mobile app, it includes both standard and scientific modes, real-time clock, and theme toggling between dark/light modes. It features advanced math operations like `sin`, `cos`, `tan`, `√`, `log`, `ln`, `π`, `e`, `^`, and `x!` along with responsive layout and error handling.

---

## ✨ Features

* 🔢 **Standard + Scientific Calculator**

  * Supports `+`, `-`, `*`, `/`, `%`, `√`, `^`, `π`, `e`, parentheses
  * Scientific functions: `sin`, `cos`, `tan` (degree input), `log`, `ln`, and `factorial`
* 🌓 **Dark/Light Mode Toggle**
* ⏰ **Live 12-hour Clock with AM/PM**
* 📱 **Mobile UI Design**

  * Custom top bar with signal, Wi-Fi, and battery icons
* 🧠 **Smart Expression Handling**

  * Expression history, custom display and evaluation
* 💥 **Shake Animation** on invalid expressions
* ✅ **Toggle Scientific Mode** using switch
* 🔁 **Theme and Mode Reset**: Automatically clears input on mode switch
* 🌐 Fully **Responsive UI** with Neumorphic Aesthetic
* 🖱️ Click-to-type interface (no keyboard required)

---

## 🖥️ Tech Stack

* **HTML5** (Semantic layout)
* **CSS3**
  * Neumorphism Design
  * Gradient Themes
  * Media Queries (Responsive)
* **JavaScript**

  * DOM Manipulation
  * Dynamic Expression Handling
  * Built-in `Math` functions
  * Custom factorial function

---

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/simmi-33/neumorphic-scientific-calculator.git
   cd neumorphic-scientific-calculator
   ```

2. **Run locally**:

   Simply open `index.html` in your browser.

---

## 📁 Project Structure

```bash
📁 neumorphic-scientific-calculator/
├── index.html        # Main HTML file
├── style.css         # Styling with Neumorphism & Responsiveness
├── script.js         # Main JS logic for calculator
├── theme.js         # Main JS logic for dark/light mode change
├── favicon.png       # App icon
└── README.md         # This file
```

---

## ⚙️ Customization

* 🎨 Modify colors in `:root`, `[data-theme="light"]`, and `[data-theme="dark"]` in `style.css`
* ➕ Add/remove scientific operations in `script.js`
* ⏰ Customize time format or top bar icons as needed
* 👁️ Adjust display size, key layout, and responsiveness in the CSS

---

## 🧠 Supported Scientific Operations

| Operator | Function          | Example Input      |
| -------- | ----------------- | ------------------ |
| `√`      | Square Root       | `√(16)` → `4`      |
| `^`      | Power             | `2^3` → `8`        |
| `sin`    | Sine (degrees)    | `sin(30)` → `0.5`  |
| `cos`    | Cosine (degrees)  | `cos(60)` → `0.5`  |
| `tan`    | Tangent (degrees) | `tan(45)` → `1`    |
| `log`    | Log base 10       | `log(100)` → `2`   |
| `ln`     | Natural Log       | `ln(e)` → `1`      |
| `π`      | Pi constant       | `π` → `3.14159265` |
| `e`      | Euler’s constant  | `e` → `2.71828182` |
| `x!`     | Factorial         | `5!` → `120`       |

---

## 👨‍💻 Developed by

**Simmi Kumari**

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify!

---
