// same header with navigation and footer from components folder
document.addEventListener("DOMContentLoaded", () => {
    // Load header and footer
    fetch("components/header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Hamburger toggle logic
            const hamburgerBtn = document.getElementById("hamburger-btn");
            const navMenu = document.getElementById("nav-menu");

            hamburgerBtn.addEventListener("click", () => {
                navMenu.classList.toggle("hidden");

                // Toggle hamburger icon to 'X' when menu is open
                if (navMenu.classList.contains("hidden")) {
                    hamburgerBtn.textContent = "\u2630"; // Hamburger icon
                } else {
                    hamburgerBtn.textContent = "\u2715"; // 'X' icon
                }
            });
        });

    fetch("components/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;



            const year = document.querySelector('#currentyear');
            const lastmod = document.querySelector('#lastModified');

            const today = new Date();
            if (year) {
                year.textContent = today.getFullYear();
            }
            if (lastmod) {
                lastmod.textContent = document.lastModified;
            }
        });
});


// tried special scrolling for showcase section on mobile view only
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('showcase-scroll-container');

    if (scrollContainer) {
        const desktopMediaQuery = window.matchMedia('(min-width: 768px)');

        const handleWheelScroll = (event) => {
            // Prevent the default vertical scroll behavior
            event.preventDefault();

            // Scroll the container horizontally
            scrollContainer.scrollLeft += event.deltaY;
        };

        // Add or remove the event listener based on the media query state
        const updateScrollListener = (mediaQuery) => {
            if (mediaQuery.matches) {
                // If it's a desktop, remove the custom scrolling listener
                scrollContainer.removeEventListener('wheel', handleWheelScroll);
            } else {
                // If it's a mobile view, add the custom scrolling listener
                scrollContainer.addEventListener('wheel', handleWheelScroll);
            }
        };

        // Initial check and setup
        updateScrollListener(desktopMediaQuery);

        // Listen for changes in the media query state (e.g., resizing the browser window)
        desktopMediaQuery.addEventListener('change', updateScrollListener);
    }
});






