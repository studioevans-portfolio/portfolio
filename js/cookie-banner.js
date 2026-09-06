document.addEventListener("DOMContentLoaded", function () {

    // Create cookie banner
    const banner = document.createElement("div");

    banner.id = "cookie-banner";

    banner.innerHTML = `
        <button id="closeCookies" aria-label="Close cookie banner">&times;</button>

        <div class="cookie-content">
            <h3>Cookies</h3>

            <br>

            <p class="cookie-text">
                Studio Evans uses Google Analytics to understand how visitors use this website.
                Analytics cookies will only be used if you choose to accept.
                <a href="/pages/privacy/privacy-cookies.html">
                    <strong>Privacy & Cookies</strong>
                </a>
            </p>

            <br>

            <div class="cookie-buttons">
                <button id="acceptCookies">Accept</button>
                <button id="rejectCookies">Reject</button>
            </div>
        </div>
    `;

    // Add banner to page
    document.body.appendChild(banner);


    // Check saved consent
    const consent = localStorage.getItem("cookieConsent");

    if (consent) {
        banner.style.display = "none";
    }


    // Accept
    document.getElementById("acceptCookies").addEventListener("click", function () {

        if (typeof gtag === "function") {
            gtag("consent", "update", {
                analytics_storage: "granted"
            });
        }

        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });


    // Reject
    document.getElementById("rejectCookies").addEventListener("click", function () {

        if (typeof gtag === "function") {
            gtag("consent", "update", {
                analytics_storage: "denied"
            });
        }

        localStorage.setItem("cookieConsent", "rejected");
        banner.style.display = "none";
    });


    // Close
    document.getElementById("closeCookies").addEventListener("click", function () {
        banner.style.display = "none";
    });

});