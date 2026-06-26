const banner = document.getElementById("cookie-banner");

const consent = localStorage.getItem("cookieConsent");

if (!consent) {
    banner.style.display = "block";
} else if (consent === "accepted") {
    gtag('consent', 'update', {
        analytics_storage: 'granted'
    });
}

document.getElementById("acceptCookies").addEventListener("click", () => {

    gtag('consent', 'update', {
        analytics_storage: 'granted'
    });

    localStorage.setItem("cookieConsent", "accepted");

    banner.style.display = "none";

});

document.getElementById("rejectCookies").addEventListener("click", () => {

    gtag('consent', 'update', {
        analytics_storage: 'denied'
    });

    localStorage.setItem("cookieConsent", "rejected");

    banner.style.display = "none";

});// JavaScript Document