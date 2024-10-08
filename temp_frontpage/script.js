// Get modal element
const modal = document.getElementById('contactModal');
// Get open modal button
const openModalBtn = document.getElementById('openContactForm');
// Get close button
const closeModalBtn = document.getElementById('closeModal');
// Get the form
const contactForm = document.getElementById('contactForm');
// Get the form response div
const formResponse = document.getElementById('formResponse');

// Listen for open click
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Listen for close click
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    contactForm.reset(); // Reset the form when modal is closed
    formResponse.innerHTML = ''; // Clear any previous messages
});

// Listen for outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        contactForm.reset();
        formResponse.innerHTML = '';
    }
});

// Handle form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(contactForm);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            formResponse.innerHTML = `<p>${data}</p>`;
            contactForm.reset();
        })
        .catch(error => {
            formResponse.innerHTML = '<p>There was an error sending your message. Please try again later.</p>';
            console.error('Error:', error);
        });
});