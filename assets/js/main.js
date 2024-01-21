// preloader

var preloader = document.getElementById('preloader');
function myFunction(){
    preloader.style.display = 'none';
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    function handleScroll() {
      const scrollPosition = window.scrollY;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          section.style.zIndex = sections.length - index;
        } else {
          section.style.zIndex = 1;
        }
      });
    }
    window.addEventListener("scroll", handleScroll);
  });
  // Add an event listener to the window for scroll events
window.addEventListener('scroll', function () {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // Get the height of the home section
  var homeHeight = document.getElementById('home').offsetHeight;

  // Check if the scroll position is greater than the height of the home section
  if (scrollPosition > homeHeight) {
    // Add the fixed-home class to the body
    document.body.classList.add('fixed-home');
  } else {
    // Remove the fixed-home class from the body
    document.body.classList.remove('fixed-home');
  }
});


