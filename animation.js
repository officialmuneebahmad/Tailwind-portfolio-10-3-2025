document.addEventListener("DOMContentLoaded", function () {
    // Initialize all functionality with proper error handling
    initializeAnimations();
    initializeScrollButtons();
    initializeTechStackAnimation();
    initializeOrangeProgressBars();
    initializeCardAnimations();
});

function initializeAnimations() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8;
    }

    function handleScroll() {
        elements.forEach((el) => {
            if (isInViewport(el) && !el.classList.contains('animated')) {
                el.classList.add("animate__animated", el.dataset.animation, "animated");
            }
        });
    }

    // Throttle scroll events
    let scrollTimeout;
    function throttledScroll() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                handleScroll();
                scrollTimeout = null;
            }, 50);
        }
    }

    window.addEventListener("scroll", throttledScroll);
    setTimeout(handleScroll, 100);
}

function initializeScrollButtons() {
    // Use event delegation for better reliability
    document.addEventListener("click", function (event) {
        // Scroll container buttons
        if (event.target.closest("#scroll-right")) {
            const container = document.getElementById("scroll-container");
            if (container) {
                container.scrollBy({ left: 250, behavior: "smooth" });
            }
        }

        if (event.target.closest("#scroll-left")) {
            const container = document.getElementById("scroll-container");
            if (container) {
                container.scrollBy({ left: -200, behavior: "smooth" });
            }
        }

        // Web container buttons
        if (event.target.closest("#web-right")) {
            const container = document.getElementById("web-scroll");
            if (container) {
                container.scrollBy({ left: 200, behavior: "smooth" });
            }
        }

        if (event.target.closest("#web-left")) {
            const container = document.getElementById("web-scroll");
            if (container) {
                container.scrollBy({ left: -200, behavior: "smooth" });
            }
        }
    });

    // Fallback direct event listeners
    setTimeout(() => {
        const scrollRight = document.getElementById("scroll-right");
        const scrollLeft = document.getElementById("scroll-left");
        const scrollContainer = document.getElementById("scroll-container");
        const webRight = document.getElementById("web-right");
        const webLeft = document.getElementById("web-left");
        const webScroll = document.getElementById("web-scroll");

        if (scrollRight && scrollContainer) {
            scrollRight.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: 250, behavior: "smooth" });
            });
        }

        if (scrollLeft && scrollContainer) {
            scrollLeft.addEventListener("click", function () {
                scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
            });
        }

        if (webRight && webScroll) {
            webRight.addEventListener("click", function () {
                webScroll.scrollBy({ left: 200, behavior: "smooth" });
            });
        }

        if (webLeft && webScroll) {
            webLeft.addEventListener("click", function () {
                webScroll.scrollBy({ left: -200, behavior: "smooth" });
            });
        }
    }, 500);
}

function initializeTechStackAnimation() {
    const cards = document.querySelectorAll('.animate-card');
    if (cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                const progressBar = entry.target.querySelector('.bg-green-500');
                const circularProgress = entry.target.querySelector('circle[data-dashoffset]');
                
                if (progressBar) {
                    const targetWidth = progressBar.getAttribute('data-width');
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 400);
                }
                
                if (circularProgress) {
                    const targetOffset = circularProgress.getAttribute('data-dashoffset');
                    setTimeout(() => {
                        circularProgress.style.strokeDashoffset = targetOffset;
                    }, 400);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    // Mobile touch effects
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function initializeOrangeProgressBars() {
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.bg-orange-500[data-width]');
        
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    }

    const progressContainers = document.querySelectorAll('.animate-progress');
    if (progressContainers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });

    progressContainers.forEach(container => {
        observer.observe(container);
    });

    setTimeout(animateProgressBars, 1000);
}

function initializeCardAnimations() {
    const phaseCards = document.querySelectorAll('.phase-card');
    if (phaseCards.length === 0) return;

    // Set initial styles
    phaseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.filter = 'blur(5px)';
    });

    function handleScrollAnimation() {
        const triggerBottom = window.innerHeight * 0.85;
        
        phaseCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom && card.style.opacity === '0') {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.filter = 'blur(0px)';
                    
                    if (index % 2 === 0) {
                        card.style.transform = 'translateY(0) scale(1.05)';
                        setTimeout(() => {
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 150);
                    }
                    
                    if (index % 2 !== 0) {
                        card.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.3)';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                        }, 600);
                    }
                }, index * 150);
            }
        });
    }

    // Throttled scroll handler
    let scrolling = false;
    function throttledScroll() {
        if (!scrolling) {
            scrolling = true;
            requestAnimationFrame(() => {
                handleScrollAnimation();
                scrolling = false;
            });
        }
    }

    window.addEventListener('scroll', throttledScroll);
    setTimeout(handleScrollAnimation, 200);
    window.addEventListener('resize', throttledScroll);
}

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.log('Script error:', e.message);
});

// Debug version - add this temporarily
function debugButtons() {
    console.log('Scroll Right:', document.getElementById('scroll-right'));
    console.log('Scroll Container:', document.getElementById('scroll-container'));
    console.log('Web Right:', document.getElementById('web-right'));
    console.log('Web Scroll:', document.getElementById('web-scroll'));
}
setTimeout(debugButtons, 1000);