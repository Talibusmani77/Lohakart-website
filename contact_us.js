document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactFormm');
    const animatedText = document.getElementById('animated-textt');
    const words = ['Contact Us', 'Connect'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 200;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            animatedText.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            animatedText.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 200;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 150;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();

});

(function() {
    emailjs.init("qdhJoAGgx1_rqzZBF");
})();

document.getElementById('contactFormm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_5don2am", "template_s4d12sp", {
        from_name: name,
        from_email: email,
        phone: mobile,
        message: message
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
        document.getElementById('contactFormm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again later.');
    });
});

const image = document.querySelector('.animated-image');
let direction = 1;
let position = 0;

function animate() {
    position += 0.5 * direction;
    if (position > 25 || position < -25) {
        direction *= -1;
    }
    image.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animate);
}

animate();


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