# Improve card vertical rhythm and CTA visibility

**Description**

Make cards feel more balanced by ensuring consistent padding and pushing CTAs to the card base. Increase CTA prominence.

**Location**

- File: `styles.css`, `index.html`

**Suggested changes**

Example CSS:
```css
.card { display:flex; flex-direction:column; padding:var(--space-m); }
.card .card-buttons { margin-top:auto; }
.card a.button { padding:12px 24px; }
```

**Priority**: Low

**Labels**: design, ux
