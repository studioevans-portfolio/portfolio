# Add skip-to-content link and focus styles

**Description**

Provide a skip-to-content link to improve keyboard navigation and add focus styles so it becomes visible when focused.

**Location**

- File: `index.html`, `styles.css`

**Suggested changes**

Add markup right after `<body>`:
```html
<a class="skip-link" href="#main-content">Skip to content</a>
```

Add CSS:
```css
.skip-link { position:absolute; left:-999px; }
.skip-link:focus { left:20px; top:20px; background:#000; color:#fff; padding:8px; z-index:10000; }
```

Also add `id="main-content"` to your primary content container (e.g., the hero section wrapper).

**Priority**: Low

**Labels**: accessibility
