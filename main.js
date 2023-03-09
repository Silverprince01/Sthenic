const menuBtn = document.querySelector('.menu');
const nav = document.getElementById('nav');
let menuOpen = false;

menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('show');
        menuOpen = true;
    }else {
        menuBtn.classList.remove('open');
        nav.classList.remove('show');
        menuOpen = false;
    }
});