const banner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");
const closeCookies = document.getElementById("closeCookies");

const consent = localStorage.getItem("cookieConsent");

if (!consent) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";

    if (consent === "accepted") {
        gtag('consent', 'update', {
            analytics_storage: 'granted'
        });
    }
}

acceptCookies.addEventListener("click", () => {

    gtag('consent', 'update', {
        analytics_storage: 'granted'
    });

    localStorage.setItem("cookieConsent", "accepted");

    banner.style.display = "none";
});

rejectCookies.addEventListener("click", () => {

    gtag('consent', 'update', {
        analytics_storage: 'denied'
    });

    localStorage.setItem("cookieConsent", "rejected");

    banner.style.display = "none";
});

closeCookies.addEventListener("click", () => {
    banner.style.display = "none";
});