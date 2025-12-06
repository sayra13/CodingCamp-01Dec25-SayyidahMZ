// script.js — Always ask for name on reload (no localStorage)
document.addEventListener('DOMContentLoaded', function () {

    // ✅ 1. Always ask for name on page load (even after refresh)
    const welcomeText = document.getElementById('welcome-text');
    
    // Always prompt — no localStorage check
    let userName = 'Guest'; // default
    const input = prompt('👋 Hello! What is your name?');
    if (input && input.trim() !== '') {
        userName = input.trim();
    }
    // Update welcome text
    welcomeText.textContent = `Hi ${userName}, Welcome To Website`;

    // ✅ 2. Form Validation & Display (unchanged)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const currentTimeSpan = document.getElementById('current-time');
        const displayName = document.getElementById('display-name');
        const displayBirth = document.getElementById('display-birth');
        const displayGender = document.getElementById('display-gender');
        const displayMessage = document.getElementById('display-message');

        // Update current time
        function updateCurrentTime() {
            const now = new Date();
            currentTimeSpan.textContent = now.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            });
        }
        updateCurrentTime();
        setInterval(updateCurrentTime, 1000);

        // Form submit handler
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value.trim() || '';
            const birth = document.getElementById('birth')?.value || '';
            const genderEl = document.querySelector('input[name="gender"]:checked');
            const gender = genderEl ? genderEl.value : '';
            const message = document.getElementById('message')?.value.trim() || '';

            // Validation
            const errors = [];
            if (!name) errors.push('Nama is required.');
            if (!birth) errors.push('Tanggal Lahir is required.');
            if (!gender) errors.push('Jenis Kelamin is required.');
            if (!message) errors.push('Pesan is required.');

            if (errors.length > 0) {
                alert('Please correct:\n• ' + errors.join('\n• '));
                return;
            }

            // Show success
            alert(`✅ Thank you, ${name}! Your message has been received.`);

            // Display in result box
            displayName.textContent = name;
            displayBirth.textContent = new Date(birth).toLocaleDateString('id-ID');
            displayGender.textContent = gender;
            displayMessage.textContent = message;

            contactForm.reset();
        });
    }

});