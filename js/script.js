// ==========================================
// CONTROLE DE DIRETRIZES DE TEMA (CYBER/MATRIX)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// ==========================================
// INTERFACE DE MENU EXPANSÍVEL (MOBILE)
// ==========================================
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
}

// ==========================================
// LÓGICA DO DROID (INTERAÇÃO, MOVIMENTO E COLISÃO)
// ==========================================
const droid = document.getElementById('droid');
const glitch = document.getElementById('glitch-overlay');
const term = document.getElementById('terminal-text');
let mouseX = 0, mouseY = 0;
let droidX = window.innerWidth - 100, droidY = window.innerHeight - 100;
let isChangingTheme = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    idleTime = 0; // Reset inatividade
    document.body.style.filter = "none";
});

function checkThemeCollision() {
    if (!droid) return;
    const droidRect = droid.getBoundingClientRect();
    const droidCenterX = droidRect.left + droidRect.width / 2;
    const droidCenterY = droidRect.top + droidRect.height / 2;

    const distance = Math.sqrt(Math.pow(mouseX - droidCenterX, 2) + Math.pow(mouseY - droidCenterY, 2));

    if (distance < 60 && !isChangingTheme) {
        toggleTheme();
        isChangingTheme = true;
        term.textContent = "SYS: Polaridade invertida via contato físico.";
        setTimeout(() => isChangingTheme = false, 1500);
    }
}

function animateDroid() {
    if (!droid) return;
    const dx = mouseX - (droidX + 30);
    const dy = mouseY - (droidY + 30);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
        droidX += dx * 0.05;
        droidY += dy * 0.05;
    } else {
        droidX += (window.innerWidth - 100 - droidX) * 0.02;
        droidY += (window.innerHeight - 100 - droidY) * 0.02;
    }

    droid.style.left = droidX + 'px';
    droid.style.top = droidY + 'px';
    
    checkThemeCollision();
    requestAnimationFrame(animateDroid);
}

if (droid) animateDroid();

// ==========================================
// COMANDOS DE HACK E MONITORAMENTO
// ==========================================
let idleTime = 0;
setInterval(() => {
    idleTime++;
    if (idleTime > 10) {
        term.textContent = "SYS: Usuário inativo. Iniciando economia de energia...";
        document.body.style.filter = "grayscale(80%)";
    }
}, 1000);

//

document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de Carrossel: Inicializado.");
    
    window.nsMove = function(direction) {
        const track = document.getElementById('ns-carousel-track');
        const slides = document.querySelectorAll('.ns-carousel-slide');
        
        if (!track || slides.length === 0) {
            console.error("Erro: Track ou Slides não encontrados!");
            return;
        }

        const slideWidth = 340; // 320px (card) + 20px (gap)
        let currentTransform = track.style.transform;
        let currentPos = currentTransform ? parseInt(currentTransform.replace(/[^\d-]/g, '')) : 0;
        
        // Calcula a nova posição
        let newPos = currentPos - (direction * slideWidth);
        
        // Limites (impede de rolar para o vazio)
        const maxScroll = -(slides.length - 1) * slideWidth;
        if (newPos > 0) newPos = 0;
        if (newPos < maxScroll) newPos = maxScroll;

        track.style.transform = `translateX(${newPos}px)`;
        console.log(`SYS: Movendo para ${newPos}px`);
    };
});