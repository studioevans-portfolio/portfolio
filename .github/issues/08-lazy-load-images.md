# Add loading="lazy" to non-critical images and consider responsive srcset

**Description**

Portfolio and other non-critical images can be lazy-loaded to improve initial page load performance. Using responsive `srcset` can also serve appropriately sized images for different viewport sizes.

**Location**

- `index.html` — portfolio thumbnails and other non-hero images (e.g., `images/*.png`, `images/*.jpg`)

**Suggested fix**

1. Add `loading="lazy"` to non-critical `<img>` tags. Example:

```diff
- <img src="images/hw.png" alt="Heathrow West website">
+ <img src="images/hw.png" alt="Heathrow West website" loading="lazy">
```

2. Optionally add `srcset` and `sizes` for responsive images (requires generating multiple sizes):

```html
<img
  src="images/hw-800.jpg"
  srcset="images/hw-400.jpg 400w, images/hw-800.jpg 800w, images/hw-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 33vw"
  alt="Heathrow West website"
  loading="lazy">
```

**Priority**: Medium

**Labels**: performance
