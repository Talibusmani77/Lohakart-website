// hamburger----

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

// ---------
const image = document.querySelector('.animated-image');
const image2 = document.querySelector('.animated-image2');
let direction = 1;
let position = 0;

function animate() {
    position += 0.5 * direction;
    if (position > 20 || position < -20) {
        direction *= -1;
    }
    image.style.transform = `translateY(${position}px)`;
    image2.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animate);
}

animate();

