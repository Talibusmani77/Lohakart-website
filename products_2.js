// ----------------

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


// Automatically advances the slides every 3 seconds
 const carouselElement = document.querySelector('#carouselExampleCaptions');

 let myCarousel = new bootstrap.Carousel(carouselElement, {
     interval: 3000, // Automatically change slide every 3 seconds
     ride: 'carousel' // Start cycling immediately
 });

 // Manually control the carousel with buttons
 const prevButton = document.querySelector('.carousel-control-prev');
 const nextButton = document.querySelector('.carousel-control-next');

 prevButton.addEventListener('click', () => {
     myCarousel.prev();
 });

 nextButton.addEventListener('click', () => {
     myCarousel.next();
 });

