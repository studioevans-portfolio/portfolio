# Move `<meta charset>` to the top of `<head>` (best practice)

**Description**

The `<meta charset="UTF-8">` element should appear as early as possible in the `<head>` (ideally first) so the browser knows the document encoding before parsing other head elements.

**Location**

- `index.html` (head)

**Suggested fix**

Place the charset meta immediately after the opening `<head>` tag. Example:

```diff
- <head>
-   <meta property="og:image" content="/images/se-logo-horiz.png">
-   <meta charset="UTF-8">
+ <head>
+   <meta charset="UTF-8">
+   <meta property="og:image" content="/images/se-logo-horiz.png">
```

**Priority**: Low

**Labels**: maintenance
