const themeStatus = document.getElementById('themeStatus');
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Initialize the theme to light mode
body.classList.add('light-mode');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
    // Toggle between light and dark modes
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        themeStatus.textContent = 'Dark Mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        themeStatus.textContent = 'Light Mode';
    }
});
