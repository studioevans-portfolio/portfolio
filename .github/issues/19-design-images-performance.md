# Optimize images: lazy-load, responsive srcset, and WebP fallback

**Description**

Improve load performance and visual quality by using responsive images (srcset + sizes), WebP fallbacks and lazy-loading for non-critical images.

**Location**

- Files: `index.html`, `images/` (requires regenerated assets)

**Suggested changes**

Example markup with srcset and lazy loading:

```html
<img
  src="images/hw-800.jpg"
  srcset="images/hw-400.jpg 400w, images/hw-800.jpg 800w, images/hw-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, 33vw"
  alt="Heathrow West website"
  loading="lazy">
```

**Notes**: This requires exporting multiple image sizes (or using a build step). Consider generating WebP versions for browsers that support them.

**Priority**: Medium

**Labels**: performance, design
