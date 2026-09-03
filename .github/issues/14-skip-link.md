# Add a skip-to-content link for keyboard users

**Description**

A skip link helps keyboard and screen reader users bypass repetitive navigation and go straight to the main content.

**Location**

- `index.html` (top of `<body>`)

**Suggested fix**

Add a visible-but-offscreen skip link that becomes visible on focus. Example markup:

```html
<a class="skip-link" href="#main-content">Skip to content</a>
```

Add CSS:

```css
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-link:focus {
  left: 20px;
  top: 20px;
  width: auto;
  height: auto;
  background: #000;
  color: #fff;
  padding: 8px 12px;
  z-index: 10000;
}
```

Then add `id="main-content"` to the main content container (e.g., the hero or primary wrapper).

**Priority**: Low

**Labels**: accessibility
