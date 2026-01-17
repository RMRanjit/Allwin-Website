document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;

            const subject = encodeURIComponent(`Inquiry from ${name} - Interested in ${interest}`);
            const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Interest: ${interest}
Message:
${message}
            `);

            const mailtoLink = `mailto:allwinserv@gmail.com?subject=${subject}&body=${body}`;

            alert('Your email client will now open to send your message. Please click "Send" in your email client.');
            window.location.href = mailtoLink;
        });
    }
});