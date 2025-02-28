document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const confirmation = confirm(`Please confirm your information:\nName: ${name}\nEmail: ${email}`);

        if (confirmation) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            alert('Information saved successfully!');
        }
    });
});