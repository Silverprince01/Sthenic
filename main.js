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

// making the link on cover page responsive 

const catLink1 = document.getElementById('cat1');
const catLink2 = document.getElementById('cat2');
const catParagraph1 = catLink1.nextElementSibling;
const catParagraph2 = catLink2.nextElementSibling;

catLink1.addEventListener('mouseenter', function () {
    console.log(catParagraph1.style.opacity = '1');
    console.log(catLink1.parentElement.style.background = "#5DDDFF");
})

catLink1.addEventListener('mouseleave', function () {
    console.log(catParagraph1.style.opacity = '0');
    console.log(catLink1.parentElement.style.background = "transparent");
})

catLink2.addEventListener('mouseenter', function () {
    console.log(catParagraph2.style.opacity = '1');
    console.log(catLink2.parentElement.style.background = "#5DDDFF");
})

catLink2.addEventListener('mouseleave', function () {
    console.log(catParagraph2.style.opacity = '0');
    console.log(catLink2.parentElement.style.background = "transparent");
})

// vision section hover effect

const vCard1 = document.getElementById('v-card1')
const vCard2 = document.getElementById('v-card2')
const vCard1Title = document.getElementById('v-card1-title')
const vCard2Title = document.getElementById('v-card2-title')
const vCard1Img = document.getElementById('v-card1-img')
const vCard2Img = document.getElementById('v-card2-img')

vCard1.addEventListener('mouseenter', function () {
    vCard1Title.style.fontSize = '40px';
    vCard1Img.style.width = '50px';
    vCard1.style.border = '3px solid #001D45'
    vCard1.style.height = '280px'
})

vCard1.addEventListener('mouseleave', function () {
    vCard1Title.style.fontSize = '28px';
    vCard1Img.style.width = '40px';
    vCard1.style.border = '1px solid #001D45'
    vCard1.style.height = '250px'
})

vCard2.addEventListener('mouseenter', function () {
    vCard2Title.style.fontSize = '40px';
    vCard2Img.style.width = '50px';
    vCard2.style.border = '3px solid #001D45'
    vCard2.style.height = '280px'
})

vCard2.addEventListener('mouseleave', function () {
    vCard2Title.style.fontSize = '28px';
    vCard2Img.style.width = '40px';
    vCard2.style.border = '1px solid #001D45'
    vCard2.style.height = '250px'
})

// button hover effect 

const btn = document.querySelectorAll('.btn')
console.log(btn);