document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle');
    const sunMoon = document.getElementById('sun-moon');
    const anchor = document.querySelectorAll('.color-class');
    const footerTxt = document.querySelectorAll('.footer-text');
    const extraTxt = document.querySelectorAll('.extra-txt');
    let isDay = true;

    toggle.addEventListener('click', () => {
        if (isDay) {
            document.body.style.backgroundColor = '#000000'; // Night color
            document.body.style.color = '#ffffff';
            for (var i = 0; i < anchor.length; i++) {
                anchor[i].style.backgroundColor = "#1b1b1b";

                anchor[i].style.borderColor = "#1b1b1b";

                anchor[i].addEventListener('mouseover', function() {
                    this.style.borderColor = "#1447e6";
                });

                anchor[i].addEventListener("mouseout", function () {
                    this.style.borderColor = "#1b1b1b"; // Reset border color when not hovered
                });


            }
            for (var i = 0; i < footerTxt.length; i++) {
                footerTxt[i].style.color = "#131314";
            }
            for (var i = 0; i < extraTxt.length; i++) {
                extraTxt[i].style.color = "#ffffff";
            }
            // sunMoon.setAttribute('fill', 'white');
        } else {
            document.body.style.backgroundColor = '#ffffff'; // Day color
            document.body.style.color = '#000000';
            for (var i = 0; i < anchor.length; i++) {
                anchor[i].style.backgroundColor = "#ffffff";
            }

            for (var i = 0; i < extraTxt.length; i++) {
                extraTxt[i].style.color = "#222222";
            }
            // sunMoon.setAttribute('fill', 'white');
        }
        isDay = !isDay;
    });
});
