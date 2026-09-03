# Cookie banner UX improvements: server-side, cross-subdomain storage, and preference changes

**Description**

Current implementation uses `localStorage` to persist consent. Consider whether consent should be stored via cookies (to be sent to the server), be consistent across subdomains, or be changed by the user later.

**Location**

- `js/cookie-banner.js`
- `index.html` cookie-banner and privacy pages (`pages/privacy-cookies.html`)

**Suggested improvements**

- If you need server-side behavior based on consent (e.g., not loading analytics on the server), set an HTTP cookie from client JS instead of only using `localStorage`.
- To share consent across subdomains, set a cookie with `domain=.studioevans.co.uk` (if serving from that domain) and appropriate `SameSite`/`secure` flags.
- Provide a visible link in privacy page or footer to change cookie preferences, which clears `localStorage` and resets the banner.

Example: set a cookie from JS (simple helper):

```javascript
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=.studioevans.co.uk; SameSite=Lax; Secure`;
}

// when accepting
setCookie('cookieConsent', 'accepted');
```

**Priority**: Medium

**Labels**: enhancement, privacy
