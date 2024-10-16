const changingTexts = [
    "Building Stronger & Sustainable Metal Supply Chain",
    "Revolutionizing Metal Fabrication with Industry 4.0",
    "Connecting Suppliers and Buyers Seamlessly",
    "Optimizing the Metal Supply Chain Network"
];

const images = [
    "assets/6909.jpg",
    "assets/4153553.jpg",
    "assets/20943566.jpg",
    "assets/4153553.jpg"
];

let currentIndex = 0;

function updateContent() {
    const textElement = document.getElementById('changing-text');
    const imageElement = document.getElementById('changing-image');

    // Fade out text
    textElement.style.opacity = 0;

    // Fade out image with slide up effect
    gsap.to(imageElement, { opacity: 0, y: 20, duration: 0.5 });

    setTimeout(() => {
        // Change content
        textElement.textContent = changingTexts[currentIndex];
        imageElement.src = images[currentIndex];

        // Fade in text
        textElement.style.opacity = 1;

        // Fade in image with slide down effect
        gsap.to(imageElement, { opacity: 1, y: 0, duration: 0.5 });

        currentIndex = (currentIndex + 1) % changingTexts.length;
    }, 500);
}

setInterval(updateContent, 3000);

// ------------


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.fabrication-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Removed the 'visible' class addition
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        const header = item.querySelector('.feature-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});


(function() {
emailjs.init("qdhJoAGgx1_rqzZBF"); // Replace with your actual EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', function() {
const dynamicText = document.getElementById('dynamic-text'); // Updated to target the new class
const texts = [
"Buying",
"Selling",
"Metal Fabrication",
"Recycling",
"Logistics"
];
let textIndex = 0;

function changeText() {
dynamicText.textContent = texts[textIndex]; // Use the new variable name
textIndex = (textIndex + 1) % texts.length;
}

setInterval(changeText, 3000);

document.getElementById('contactFormm').addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const mobile = document.getElementById('mobile').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

emailjs.send("service_5don2am", "template_s4d12sp", {
    from_name: name,
    from_email: email,
    phone: mobile,
    subject: subject,
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
});
