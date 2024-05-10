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
let logoutBtn = document.getElementById("log_out");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.05 + "px";

  mountains_behind.style.top = value * 1 + "px";
  mountains_front.style.top = value * 0 + "px";

   // Zoom effect for the front mountain
   let zoomFactor = 1 + value * 0.0019; // Adjust the multiplier for the zoom effect
   mountains_front.style.transform = `scale(${zoomFactor})`;

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

// logout popup

logoutBtn.addEventListener("click", function() {
  // Create the overlay and popup elements
  const overlay = document.createElement("div");
  overlay.classList.add("logout_overlay");

  const popup = document.createElement("div");
  popup.classList.add("logout_popup");

  // Add content to the popup
  popup.innerHTML = `
    <h2>Log out</h2>
    <p>You will be returned to the login screen.</p>
    <button id="cancel_logout">Cancel</button>
    <button id="confirm_logout">Log out</button>
  `;

  // Append the popup to the overlay
  overlay.appendChild(popup);

  // Append the overlay to the body
  document.body.appendChild(overlay);

  // Add event listeners for the buttons
  const confirmButton = document.getElementById("confirm_logout");
  const cancelButton = document.getElementById("cancel_logout");

  confirmButton.addEventListener("click", function() {
    // Perform logout action here
    // For example, redirect to logout page or clear session/local storage
    alert("Logging out..."); // Temporary alert for demonstration
    // Remove the overlay and popup
    overlay.remove();
  });

  cancelButton.addEventListener("click", function() {
    // Remove the overlay and popup
    overlay.remove();
  });
});


function smoothScrollToTop() {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScrollToTop);
    window.scrollTo(0, currentScroll - currentScroll / 25); // Adjust the divisor for smoother or faster scrolling
  }
}
