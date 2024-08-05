document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.light');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    light.style.setProperty("--mouse-x", `${mouseX}px`);
    light.style.setProperty("--mouse-y", `${mouseY}px`);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        if (header.style.borderBottom === 'none') {
            header.style.borderBottom = '3px solid var(--underLine)';
        } else {
            header.style.borderBottom = 'none';
        }
    });
});

