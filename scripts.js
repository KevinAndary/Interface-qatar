// Example: You can add some simple animations or interactions
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.querySelector('.email');
    emailLink.addEventListener('mouseover', function() {
        emailLink.style.backgroundColor = '#0056b3';
    });

    emailLink.addEventListener('mouseout', function() {
        emailLink.style.backgroundColor = '#007BFF';
    });
});
