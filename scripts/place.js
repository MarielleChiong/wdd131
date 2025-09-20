const temperature = 10; // °C
const windSpeed = 5;    // km/h

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} °C`;
} else {
    windChillElement.textContent = "N/A";
}







// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date
const lastmod = document.querySelector('#lastModified');
if (lastmod) {
    lastmod.textContent = document.lastModified;
}