// Load saved email on page load
window.addEventListener('load', function() {
    const savedEmail = localStorage.getItem('savedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const storedPassword = localStorage.getItem(email);
    
    if (storedPassword && storedPassword === password) {
        document.getElementById('loginMessage').textContent = 'Login successful!';
        document.getElementById('loginMessage').style.color = 'green';
        // Save the email
        localStorage.setItem('savedEmail', email);
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid email or password.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});