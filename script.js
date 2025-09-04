// script//
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
    const visible = getComputedStyle(menu).display !== 'none';
    menu.style.display = visible ? 'none' : 'block';
    menuBtn.setAttribute('aria-expanded', String(!visible));
    });
}

// Año dinámico en footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
} 