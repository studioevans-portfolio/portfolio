// JavaScript Documentconst scrollButton = document.getElementById('scrollButton');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
    const footerTop = footer.getBoundingClientRect().top;

    if (footerTop <= window.innerHeight) {
        scrollButton.textContent = '↑';
        scrollButton.href = '#top';
        scrollButton.setAttribute('aria-label', 'Back to top');
    } else {
        scrollButton.textContent = '↓';
        scrollButton.href = '#footer';
        scrollButton.setAttribute('aria-label', 'Go to footer');
    }
});