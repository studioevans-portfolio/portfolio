# Improve mobile menu accessibility (aria-expanded, aria-controls, target by id)

**Description**

The mobile menu toggle button currently has an `aria-label` but does not maintain `aria-expanded` state or use `aria-controls`. The JS selects `nav` generically (`document.querySelector('nav')`) which may be brittle if more `nav` elements are added.

**Location**

- File: `index.html` (header/menu button)
- File: bottom of `index.html` (inline script)

**Suggested fix**

1. Update the button markup:

```html
<button class="menu-toggle" aria-label="Toggle menu" aria-controls="mobileNav" aria-expanded="false">
  ☰
</button>
```

2. Target the nav by id in JS and update `aria-expanded` when toggled:

```javascript
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('mobileNav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });
}
```

3. Ensure the mobile nav has `id="mobileNav"` (already present) and consider adding `role="navigation"` for clarity.

**Priority**: Medium

**Labels**: accessibility
