const year = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const today = new Date();
if (year) {
    year.textContent = today.getFullYear();
}
if (lastmod) {
    lastmod.textContent = document.lastModified;
}