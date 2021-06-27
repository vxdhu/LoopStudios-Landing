const hamburger = document.querySelector('.hamburger');
const mobilenav = document.querySelector('.nav-mob');
const content = document.querySelector('.hero-content');
const hamnav = document.querySelector('.ham-nav');
const ham = document.querySelector('#ham');



console.log('hey');

hamburger.addEventListener('click', () => {
    content.classList.toggle('not-active')
    mobilenav.classList.toggle('active');
    hamnav.classList.toggle('active');
    if (hamnav.classList.contains('active')) {
        ham.src = "images/icon-close.svg"
    } else {
        ham.src = "images/icon-hamburger.svg"
    }

})