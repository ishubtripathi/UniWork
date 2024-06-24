const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: - 100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    // snap: 1 / (sections.length - 1),
    // markers: true,
  }
});

console.log(0.5 / (sections.length - 1))

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    stagger: 1,
    scrub: 1,
    // markers: true,
    end: "+=3500",
  }
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "none",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      // containerAnimation: scrollTween,
      start: "left center",
      // markers: true
    }
  });
});
