// let btn = document.querySelector("#btn");
// let sidebar = document.querySelector(".sidebar");
// let searchBtn = document.querySelector("bx-search");

// btn.onclick = function(){
//     sidebar.classList.toggle("active");
// }
// searchBtn.onclick = function(){
//     sidebar.classList.toggle("active");
// }

let text = document.getElementById("text");
let btn = document.getElementById("Mbtn");
let header = document.querySelector("header");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let logoutBtn = document.getElementById("log_out");

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
