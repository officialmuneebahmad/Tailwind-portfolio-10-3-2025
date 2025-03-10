document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 1; // Adjust threshold if needed
    }

    function handleScroll() {
        elements.forEach((el) => {
            if (isInViewport(el)) {
                el.classList.add("animate__animated", el.dataset.animation);
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case elements are already in view
});

document.getElementById("scroll-right").addEventListener("click", function () {
    document.getElementById("scroll-container").scrollBy({ left: 250, behavior: "smooth" });
});

document.getElementById("scroll-left").addEventListener("click", function () {
    document.getElementById("scroll-container").scrollBy({ left: -200, behavior: "smooth" });
});

// web
document.getElementById("web-right").addEventListener("click", function () {
    document.getElementById("web-scroll").scrollBy({ left: 200, behavior: "smooth" });
});

document.getElementById("web-left").addEventListener("click", function () {
    document.getElementById("web-scroll").scrollBy({ left: -200, behavior: "smooth" });
});
