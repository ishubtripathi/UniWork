// scroll behaviour 
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for internal anchor links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start' // Scroll to the top of the target element
              });
          }
      });
  });
});

// scroll section
document.addEventListener("DOMContentLoaded", function() {
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= 
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= 
            (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        if (isInViewport(row)) {
            const img = row.querySelector("img");
            if (row.querySelector(".left")) {
                gsap.to(img, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                });
            } else {
                gsap.to(img, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                });
            }
        }
    });
    gsap.utils.toArray(".img-container.right img").forEach((img) => {
        gsap.to(img,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: img,
                start: "top 75%",
                end: "bottom 70%",
                scrub: true,
            },
        });
    });
    gsap.utils.toArray(".img-container.left img").forEach((img) => {
        gsap.to(img,{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: img,
                start: "top 75%",
                end: "bottom 70%",
                scrub: true,
            },
        });
    });
    gsap.utils.toArray(".img-container p").forEach((text) => {
        gsap.from(text, {
            opacity: 0,
            y: 20,
            scrollTrigger: {
                trigger: text,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        });
    });
});


