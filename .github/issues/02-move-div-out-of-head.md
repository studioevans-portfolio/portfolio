# Move `<div id="top">` out of `<head>` into `<body>`

**Description**

`index.html` currently contains a `<div id="top"></div>` inside the `<head>` section. Block-level content such as `<div>` is invalid inside the head — it should be in the body. This can cause unexpected rendering or validator errors.

**Location**

- File: `index.html`
- Head section

**Suggested fix**

Move the element so it sits at the top of the `<body>`, immediately after the opening `<body>` tag. Example:

```diff
- <!-- inside <head> -->
- <div id="top"></div>
+ <!-- move to top of body -->
+ <body>
+   <div id="top"></div>
```

(Ensure you remove the duplicate opening `<body>` if you already have it.)

**Priority**: High

**Labels**: bug, html
