# Establish consistent spacing scale and CSS variables

**Description**

Introduce a spacing scale via CSS variables to maintain consistent vertical rhythm and spacing across components.

**Location**

- File: `styles.css`

**Suggested changes**

Add variables and replace hard-coded spacing in a follow-up pass:

```css
:root {
  --space-xxs: 4px;
  --space-xs: 8px;
  --space-s: 12px;
  --space-m: 24px;
  --space-l: 32px;
  --space-xl: 48px;
}

.container { padding: 0 var(--space-m); }
.section { padding: var(--space-xl) 0; }
```

**Priority**: Low

**Labels**: design, maintainability
