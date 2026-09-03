# Add subtle header backdrop and reduce opacity on scroll

**Description**

Visually separate the sticky header from content using a translucent background and backdrop-filter blur when scrolled.

**Location**

- File: `styles.css`, `index.html` (may need small script to toggle class on scroll)

**Suggested changes**

CSS snippet:
```css
header.sticky { background: rgba(0,0,0,0.65); backdrop-filter: blur(6px); transition: background .2s ease; }
```

Optional JS: toggle `header.sticky` when the page is scrolled beyond a threshold.

**Priority**: Low

**Labels**: design, polish
