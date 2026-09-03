# Tune hero layout & heading hierarchy (ensure single H1)

**Description**

Ensure the page has a single `<h1>` and tune hero typography so headings are prominent but not overwhelming on large screens.

**Location**

- File: `index.html`, `styles.css`

**Suggested changes**

Option A — Make the hero heading the H1 (visible):
```html
<h1>Web Designer & Digital Designer in North Wales</h1>
```

Option B — Keep hero as H2 and add a visually-hidden H1 in the header:
```html
<h1 class="visually-hidden">Studio Evans — Web and Graphic Designer in North Wales</h1>
```

Visually-hidden utility (CSS):
```css
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
```

**Priority**: Medium

**Labels**: design, seo
