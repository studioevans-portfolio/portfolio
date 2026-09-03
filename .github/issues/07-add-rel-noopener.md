# Add rel="noopener noreferrer" to external links that use target="_blank"

**Description**

Some external links open in new tabs via `target="_blank"` but lack `rel="noopener noreferrer"`. This is a security best practice to prevent the opened page from gaining access to `window.opener` and potentially manipulating the original page.

**Location**

- `index.html` — multiple `<a ... target="_blank">` links (portfolio links, external companies)

**Suggested fix**

Add `rel="noopener noreferrer"` to all anchors that include `target="_blank"`. Example:

```diff
- <a href="https://heathrow-west.info/" target="_blank" rel="noopener" class="button">Visit Website</a>
+ <a href="https://heathrow-west.info/" target="_blank" rel="noopener noreferrer" class="button">Visit Website</a>
```

**Priority**: Medium

**Labels**: security
