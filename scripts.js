// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.construction-message > *');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 300);
    });
});
