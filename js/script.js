// ==========================================
// CONTROLE DE DIRETRIZES DE TEMA (CYBER/MATRIX)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-sun';
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.className = 'fa-solid fa-moon';
        }
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark'; // Padrão futurista: Escuro
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
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

    // Fecha ao clicar fora ou em algum link da navegação
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });
}

// ==========================================
// PERFORMANCE OPTIMIZATION: SCROLL REVEAL via INTERSECTION OBSERVER
// ==========================================
const scrollItems = document.querySelectorAll(
    '.hero-text, .section-title-wrap, .cyber-card, .blog-cyber-card, .skill-card-cyber'
);

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const cyberObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Uma vez revelado, cancela a observação para poupar memória
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

scrollItems.forEach(item => {
    cyberObserver.observe(item);
});

// ==========================================
// EFEITO DE DIGITAÇÃO DINÂMICA (TERMINAL TYPEWRITER)
// ==========================================
const typeTarget = document.querySelector('.type-target');
if (typeTarget) {
    const phrases = [
        "Desenvolvedor Web",
        "Especialista Front-End",
        "Segurança & Soluções Web",
        "Arquiteto de Interfaces"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typeTarget.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // Deleta mais rápido
        } else {
            typeTarget.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 90; // Velocidade normal escrevendo
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1800; // Tempo parado lendo a frase completa
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Delay antes de iniciar nova frase
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Inicializa o processo após o carregamento da interface
    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(typeEffect, 800);
    });
}