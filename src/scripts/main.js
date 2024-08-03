
document.addEventListener('mousemove', function(e) {
    const light = document.querySelector('.light');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    light.style.setProperty("--mouse-x", `${mouseX}px`);
    light.style.setProperty("--mouse-y", `${mouseY}px`);
});
