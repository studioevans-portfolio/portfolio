# Clean trailing slashes in asset URLs (e.g., `/images/bcl.pdf/` → `/images/bcl.pdf`)

**Description**

Some asset links include a trailing slash after a filename (e.g., `/images/bcl.pdf/`) which can cause 404s or unexpected server behavior. File paths should not include a trailing slash when pointing to files.

**Location**

- `index.html` — project links to PDFs: e.g., `/images/bcl.pdf/`, `/images/bsf.pdf`

**Suggested fix**

Remove trailing slashes from file URLs. Example:

```diff
- <a href="/images/bcl.pdf/" target="_blank" rel="noopener" class="button">View Project</a>
+ <a href="/images/bcl.pdf" target="_blank" rel="noopener noreferrer" class="button">View Project</a>
```

**Priority**: Low

**Labels**: maintenance
