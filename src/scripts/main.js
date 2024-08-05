document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.light');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    light.style.setProperty("--mouse-x", `${mouseX}px`);
    light.style.setProperty("--mouse-y", `${mouseY}px`);
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.header__nav__item');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    const menuButton = document.getElementById('menuButton');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');

    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        if (header.style.borderBottom === '3px solid transparent') {
            header.style.borderBottom = '3px solid var(--underLine)';
        } else {
            header.style.borderBottom = '3px solid transparent';
        }
    });
});
