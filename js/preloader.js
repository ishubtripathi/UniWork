var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.classList.add("fade-out");
        setTimeout(function() {
            loader.style.display = "none";
        }, 100); // Match this duration to the CSS transition duration
    }, 100); // Delay before starting the fade-out effect (in milliseconds)
});


// $(window).on('load',function(){
// 	setTimeout(function(){ // allowing 3 secs to fade out loader
// 	$('preloader').fadeOut('slow');
// 	},3500);
// });