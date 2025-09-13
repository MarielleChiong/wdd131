const menuButton = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !expanded); // Accessibility toggle

    navLinks.classList.toggle('active');   // Show/hide menu
    menuButton.classList.toggle('active'); // Transform hamburger into X
});

// Reset menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        navLinks.classList.remove('active');
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false'); // Reset accessibility state
    }
});


// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;