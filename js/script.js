// Ensure the document is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const form = document.querySelector('.contact-form');
    const formMessage = document.createElement('div');
    form.appendChild(formMessage); // Append message div to form

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous messages
        formMessage.textContent = '';
        formMessage.style.color = '';

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            formMessage.textContent = 'Name, Email, and Message are required.';
            formMessage.style.color = 'red';
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        console.log(name);
        console.log(email);
        console.log(subject);
        console.log(message);
        // Success message
        formMessage.textContent = 'Your message has been sent successfully!';
        formMessage.style.color = 'green';

        // Optional: Clear the form fields
        form.reset();
    });

    
});
