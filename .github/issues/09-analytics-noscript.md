# Add <noscript> fallback / guard analytics when scripts are blocked

**Description**

If users block scripts, the analytics script may never run and `gtag` may be undefined. Also, there is no `<noscript>` fallback for basic tracking or messaging. Ensure analytics calls are guarded and consider a minimal `<noscript>` fallback if appropriate.

**Location**

- `index.html` (head) and `js/cookie-banner.js`

**Suggested fix**

1. Guard `gtag` calls in `js/cookie-banner.js` (see issue #4).
2. Optionally add a `<noscript>` analytics fallback where meaningful, or avoid adding tracking when scripts are blocked. Example `<noscript>` that doesn't send analytics but documents that JS is required:

```html
<noscript>
  <meta name="robots" content="noindex">
  <div style="background:#000;color:#fff;padding:10px;text-align:center;">This site requires JavaScript for full functionality.</div>
</noscript>
```

(You may decide not to include a tracking pixel in noscript to respect privacy.)

**Priority**: Low

**Labels**: enhancement, privacy
