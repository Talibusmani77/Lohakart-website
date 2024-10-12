
// our-Categories-section
  document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.animate-section');
  const cards = document.querySelectorAll('.card');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('show');
        
        // Animate cards if this is the Product section
        if (section.id === 'Product_section') {
          cards.forEach(card => {
            card.classList.add('show');
          });
        }
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load
});



// our_services-section
  document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.animate-section2');
  const cards = document.querySelectorAll('.card');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('show');
        
        // Animate cards if this is the Product section
        if (section.id === 'Product_section') {
          cards.forEach(card => {
            card.classList.add('show');
          });
        }
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load
});


// industries-we-serve
  document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.animate-section3');
  const cards = document.querySelectorAll('.card');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('show');
        
        // Animate cards if this is the Product section
        if (section.id === 'Product_section') {
          cards.forEach(card => {
            card.classList.add('show');
          });
        }
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on load
});
