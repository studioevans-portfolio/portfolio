# Add a primary `<h1>` for SEO and accessibility

**Description**

There is no `<h1>` on the page. A single meaningful `<h1>` helps screen reader users and search engines understand the primary topic of the page.

**Location**

- `index.html` (header or hero section)

**Suggested fix**

Add a single `<h1>` to represent the site/page. Example:

```html
<header>
  <div class="container">
    <h1 class="visually-hidden">Studio Evans — Web and Graphic Designer in North Wales</h1>
    <a href="/">
      <img id="header-logo" src="images/studio-evans-logo-white.png" alt="Studio Evans">
    </a>
    <!-- ... -->
  </div>
</header>
```

If you prefer the visible title in the hero, make sure there is exactly one `<h1>` there (e.g., replace the hero `<h2>` with `<h1>`). If you hide the `<h1>` visually, add a `.visually-hidden` utility class in CSS:

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

**Labels**: seo, accessibility
