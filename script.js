
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

   // Add this script at the end of your body tag
   document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('click', function() {
        // Toggle active class on touch devices
        if (window.matchMedia('(hover: none)').matches) {
          // Remove active class from all other cards
          cards.forEach(otherCard => {
            if (otherCard !== card) {
              otherCard.classList.remove('active');
            }
          });
          // Toggle active class on clicked card
          this.classList.toggle('active');
        }
      });
    });
    
    // Close cards when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.card')) {
        cards.forEach(card => card.classList.remove('active'));
      }
    });
  });





