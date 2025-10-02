new Typed("#typed", {
    strings: ["Hello, World!", "Welcome to My Portfolio", "Let's Build Something Great!"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  });

  window.addEventListener("scroll", function() {
    let button = document.getElementById("backToTop");
    let scrollPosition = window.scrollY + window.innerHeight;
    let pageHeight = document.documentElement.scrollHeight;

    // Show button when near the bottom
    if (scrollPosition >= pageHeight - 5000) {
        button.classList.remove("opacity-0", "pointer-events-none");
        button.classList.add("opacity-100");
    } else {
        button.classList.add("opacity-0", "pointer-events-none");
        button.classList.remove("opacity-100");
    }

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



