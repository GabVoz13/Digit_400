// This script adds interactivity to the <span> elements with the "toggle" class.
// When you click on a word like "JavaScript", "CSS", or "HTML",
// it toggles a CSS class named "on" to change its appearance.

const toggleSpans = document.querySelectorAll('.toggle');

toggleSpans.forEach(span => {
    span.addEventListener('click', () => {
        span.classList.toggle('on');
    });
});