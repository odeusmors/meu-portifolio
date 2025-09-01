// ==========================
// TOGGLE TEMA
// ==========================
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '🌙';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ==========================
// MENU MOBILE
// ==========================
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
}

// ==========================
// HERO PARALLAX
// ==========================
const heroImage = document.querySelector('.hero-image img');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(heroImage) heroImage.style.transform = `translateY(${scrollY * 0.2}px)`;
});

// ==========================
// SCROLL REVEAL
// ==========================
const scrollItems = document.querySelectorAll('.hero-text, .hero-image, .card, .skill-card, .detalhe-item, h3');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    scrollItems.forEach(item => {
        const revealTop = item.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100) item.classList.add('show');
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
