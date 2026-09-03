# Verify color contrast and add focus styles

**Description**

Ensure text and interactive elements meet WCAG contrast ratios and provide visible focus outlines for keyboard users.

**Location**

- Files: `styles.css`, `index.html`

**Suggested changes**

1. Add focus-visible styles for interactive elements:

```css
:focus {
  outline: 3px solid #0164DF;
  outline-offset: 3px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

2. Audit color contrast (particularly for thin font weights) and increase body font-weight if necessary to improve perceived contrast.

**Priority**: Medium

**Labels**: design, accessibility
