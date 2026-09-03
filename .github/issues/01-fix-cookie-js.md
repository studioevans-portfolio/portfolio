# Fix incorrect <link> referencing cookie JS

**Description**

index.html includes a stylesheet link to the cookie banner JavaScript file:

```html
<link rel="stylesheet" href="js/cookie-banner.js">
```

This is incorrect — JavaScript files should be loaded with `<script>` not `<link rel="stylesheet">`. The script is already loaded later in the document with `<script src="js/cookie-banner.js"></script>`, so the `<link>` line should be removed.

**Location**

- File: `index.html`
- Head section

**Suggested fix**

Remove the erroneous `<link>` tag from the `<head>` (or replace with a proper `<script>` if you intended to load it there). Example — remove this line:

```diff
- <link rel="stylesheet" href="js/cookie-banner.js">
```

No further code required if the script is already included at the end of the `<body>`.

**Priority**: High

**Labels**: bug
