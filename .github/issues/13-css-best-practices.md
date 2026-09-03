# CSS best-practices: avoid `!important`, add font fallbacks, and respect reduced motion

**Description**

`styles.css` uses `!important` in a few places and has a minimal font stack. Also consider honoring `prefers-reduced-motion` to improve accessibility.

**Location**

- `styles.css`

**Suggested fixes**

1. Remove `!important` declarations where unnecessary and instead increase selector specificity or refactor.
2. Add a font fallback stack to the Google font usage. Example:

```css
font-family: "Stack Sans Notch", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

3. Add `prefers-reduced-motion` support:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Priority**: Low

**Labels**: maintenance, accessibility
