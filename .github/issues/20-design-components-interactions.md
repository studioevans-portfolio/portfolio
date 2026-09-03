# Standardize button styles and micro-interactions

**Description**

Create consistent primary/secondary button variants and add subtle micro-interactions while respecting `prefers-reduced-motion`.

**Location**

- File: `styles.css`

**Suggested changes**

Example styles:

```css
.button { transition: transform .12s ease, box-shadow .12s ease; }
.button:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,0.25); }

@media (prefers-reduced-motion: reduce) {
  .button { transition: none; transform: none; }
}

.button.primary { background:#ffffff; color:#000; }
.button.secondary { background:#363737; color:#fff; }
```

**Priority**: Low

**Labels**: design, enhancement
