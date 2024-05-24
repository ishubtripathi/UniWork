document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementBottom = reveals[i].getBoundingClientRect().bottom;
            const elementVisible = 150;

            // Check if the element is partially visible within the viewport
            if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal);

    // To reveal elements on initial load
    reveal();
});

