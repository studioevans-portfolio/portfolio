# Remove duplicate `<title>` element

**Description**

`index.html` contains two `<title>` elements in the `<head>`. Only one `<title>` element is allowed; duplicates can confuse browsers and search engines.

**Location**

- File: `index.html`
- Head section

**Suggested fix**

Keep the intended title and remove the duplicate. Example — keep this:

```html
<title>Studio Evans | Graphic Designer & Web Designer in North Wales</title>
```

And remove the other `<title>` tag.

**Priority**: High

**Labels**: bug, seo
