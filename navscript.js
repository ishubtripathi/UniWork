// let btn = document.querySelector("#btn");
// let sidebar = document.querySelector(".sidebar");
// let searchBtn = document.querySelector("bx-search");

// btn.onclick = function(){
//     sidebar.classList.toggle("active");
// }
// searchBtn.onclick = function(){
//     sidebar.classList.toggle("active");
// }

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_front = document.getElementById("mountains_front");
let mountains_behind = document.getElementById("mountains_behind");
let text = document.getElementById("text");
let btn = document.getElementById("Mbtn");
let header = document.querySelector("header");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";

  mountains_behind.style.top = value * 1 + "px";
  mountains_front.style.top = value * 0 + "px";

  text.style.marginRight = value * 4 + "px";
  text.style.marginTop = value * 1 + "px";
});

btn.addEventListener("click", function() {
  sidebar.classList.toggle("active");
  smoothScrollToTop(); // Smooth scroll to top
});

searchBtn.addEventListener("click", function() {
  sidebar.classList.toggle("active");
  smoothScrollToTop(); // Smooth scroll to top
});

function smoothScrollToTop() {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 20); // Adjust the divisor for smoother or faster scrolling
  }
}
