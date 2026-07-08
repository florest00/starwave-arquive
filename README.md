# 🏗️ Responsive Web Publishing Project

## 📌 Overview

This project was created to improve my web publishing skills by recreating a modern music label/agency-style website interface. The primary goal was to gain practical experience in responsive web development, CSS layout techniques, and building multiple interactive UI components with Swiper.js — including debugging real-world issues like layout shift (CLS) and cross-breakpoint slider behavior.

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

### 📚 Library

- Swiper.js

---

## 🎯 Learning Objectives

- Building responsive layouts for desktop, tablet, and mobile devices
- Understanding and applying various Swiper features (loop, centered slides, breakpoints, custom pagination/navigation, autoplay control)
- Creating reusable and maintainable CSS structures
- Implementing interactive UI with vanilla JavaScript (no framework)
- Improving layout composition using Flexbox
- Practicing semantic HTML and accessible markup
- Diagnosing and fixing layout shift (CLS) and rendering timing issues caused by CSS/JS load order

---

## ✨ Features

- **Fully responsive layout** for PC / tablet / mobile
- **8 independent Swiper sliders**, each with its own options and breakpoints:
  - Main visual banner slider (`mainSwiper`)
  - Scrolling marquee text slider (`marqueeSwiper`)
  - Artist list slider with grid layout (`artistSwiper`)
  - Item/product list slider with scrollbar (`itemSwiper`)
  - New album slider (`albumSwiper`)
  - Cheering/fan message slider (`cheerSwiper`)
  - Two best item ranking sliders (`bestItemSwiper`, `bestItemSwiper2`)
- **Slide-in aside navigation** with hamburger menu toggle, accordion-style category submenu, and overlay-based close interaction
- **Search overlay** with open/close states and outside-click detection
- **Dynamic product rendering** by artist using JavaScript template literals
- **Scroll-based quick buttons** (scroll to top / scroll to bottom) that appear/disappear based on scroll position
- **Custom pagination & navigation controls** styled independently from Swiper's defaults
- **Autoplay control by viewport width** (e.g. autoplay pauses on smaller screens, resumes on desktop)
- Smooth UI transitions (opacity fades, slide animations, hover states)
- Cross-browser compatible layout

---

## 💡 What I Learned

- How to integrate and customize multiple Swiper.js instances on a single page without option conflicts
- Responsive design techniques using media queries and breakpoint-based Swiper options
- Writing scalable, specificity-aware CSS (and debugging real specificity bugs, e.g. ID vs. class selector mismatches)
- Structuring HTML for readability and maintainability across large multi-section pages
- Diagnosing **Cumulative Layout Shift (CLS)** caused by:
  - Missing reserved space for images (`height: auto` depending on JS-calculated widths) — solved with `aspect-ratio`
  - CSS/JS load order timing (blocking vs. deferred scripts) causing slides to flash at full width before Swiper initialization
  - Scrollbar appearance/disappearance changing viewport width after image load, triggering Swiper's `observer` to recalculate slide sizes
- Learning to let Swiper "own" slide sizing rather than fighting it with hardcoded/`calc()` CSS widths, to avoid breakpoint transition bugs
- Enhancing user experience through interactive components (accordion menus, overlays, dynamic content rendering)

---

## 🚀 Getting Started

```bash
open index.html
```
