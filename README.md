# Navigation Tab Menu Vol. 1

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/navigation-tab-menu-vol1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 9.5-second screen recording.

## Video analysis

The video title is **Navigation Tab Menu Vol. 1**. The preview shows a dark rounded horizontal navigation bar with five outline icons:
1. Home
2. Favorites (heart)
3. Create (plus in circle)
4. Profile (user)
5. Notifications (bell)

A spotlight beam highlights the selected icon. The beam has a narrow bright cap at the top, a soft translucent trapezoid fading downwards, and a bright underline at the bottom. The spotlight slides horizontally as the user taps each item. The video demonstrates the selection moving across the five icons, including Profile and Favorites.

The source code panel visibly references `style.css`, `script.js`, `.spotlight-beam`, `clip-path: polygon(...)`, `filter: blur(4px)`, `transform: scaleY(...)`, and `.active .spotlight-beam`. The recording does not show all original source lines clearly, so this is a clean implementation of the observed design and interaction, not a verbatim copy of the original code.

## Features

- Five navigation tabs with inline SVG icons.
- Animated spotlight beam that tracks the active tab.
- Glowing top cap and bottom underline.
- Active icon brightens and lifts slightly.
- Live selected-tab label and position counter.
- Keyboard support: Left/Right arrows, Home and End.
- Accessible labels and `aria-pressed` state.
- Responsive mobile layout.
- No external dependencies or build step.

## Run locally

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
navigation-tab-menu-vol1/
├── index.html
├── style.css
├── script.js
└── README.md
```
