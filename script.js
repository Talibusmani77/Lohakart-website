
// hamburger

const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
});

// Rotate hamburger when opened
let isOpen = false;
hamburger.addEventListener('click', () => {
    if (!isOpen) {
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        hamburger.style.transform = 'rotate(0deg)';
    }
    isOpen = !isOpen;
});





