# Improve typography: weight, line-height, and font fallbacks

**Description**

Improve base typography for readability across devices by increasing body font-weight and line-height and adding a robust fallback font stack.

**Location**

- File: `styles.css`

**Suggested changes**

1. Update body font-family, font-weight and line-height. Example:

```css
body {
  font-family: "Stack Sans Notch", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300; /* lighter but readable */
  line-height: 1.5;
}

h1, h2, h3 {
  font-weight: 400;
}
```

2. Consider adjusting hero heading sizes and ensuring headings use the display font while body uses the fallback stack.

**Priority**: Medium

**Labels**: design, accessibility
