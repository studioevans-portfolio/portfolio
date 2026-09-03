# Fix cookie-banner logic: hide on any saved consent and guard gtag calls

**Description**

The cookie banner logic shows the banner only when `localStorage.cookieConsent` is not set, but doesn't hide it when consent is `"rejected"`. It also calls `gtag(...)` without checking that `gtag` is available (could throw if analytics script is blocked).

**Location**

- File: `js/cookie-banner.js`

**Suggested fix**

1. If a consent value exists (`accepted` or `rejected`), hide the banner on page load.
2. Guard calls to `gtag` by checking `typeof gtag === 'function'`.

Suggested implementation:

```javascript
const banner = document.getElementById("cookie-banner");
if (!banner) return; // defensive

const consent = localStorage.getItem("cookieConsent");

if (!consent) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
  if (consent === "accepted" && typeof gtag === "function") {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  } else if (consent === "rejected" && typeof gtag === "function") {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}

const acceptBtn = document.getElementById("acceptCookies");
const rejectBtn = document.getElementById("rejectCookies");

acceptBtn?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
  localStorage.setItem("cookieConsent", "accepted");
  banner.style.display = "none";
});

rejectBtn?.addEventListener("click", () => {
  if (typeof gtag === "function") {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
  localStorage.setItem("cookieConsent", "rejected");
  banner.style.display = "none";
});
```

**Priority**: High

**Labels**: bug, privacy
