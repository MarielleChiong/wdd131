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

// Set the last modified date
const lastmod = document.querySelector('#lastModified');
if (lastmod) {
    lastmod.textContent = document.lastModified;
}



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Cebu City Philippines",
        location: "Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44351.jpg"
    },
    {
        templeName: "Urdaneta Philippines",
        location: "Pangasinan, Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45863.jpg"
    }
];


const templeContainer = document.getElementById("temple-cards");

temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add("temple-card");

    card.innerHTML = `
        <h2>${temple.templeName}</2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeContainer.appendChild(card);
});



function renderTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        templeContainer.appendChild(card);
    });

}

function getYear(dataString) {
    return parseInt(dataString.split(",")[0]);
}
document.getElementById('home').addEventListener('click', () => {
    renderTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    renderTemples(oldTemples);
});

document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    renderTemples(newTemples);
});

document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
});

document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
});

renderTemples(temples);