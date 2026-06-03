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

// ==========================================
// LÓGICA DO DROID (INTERAÇÃO E MOVIMENTO)
// ==========================================
const glitch = document.getElementById('glitch-overlay');
const term = document.getElementById('terminal-text');

// Monitorar inatividade (se o usuário parar de ler, o sistema "dorme")
let idleTime = 0;
setInterval(() => {
    idleTime++;
    if (idleTime > 10) {
        term.textContent = "SYS: Usuário inativo. Iniciando ciclo de economia de energia...";
        document.body.style.filter = "grayscale(80%)";
    }
}, 1000);

document.addEventListener('mousemove', () => {
    idleTime = 0;
    document.body.style.filter = "none";
});

// Efeito de "Click Frenesi" (se o usuário clicar muito rápido)
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount > 10) {
        glitch.style.opacity = "1";
        term.textContent = "ALERTA: SOBRECARGA DE EVENTOS DETECTADA!";
        setTimeout(() => {
            glitch.style.opacity = "0";
            clickCount = 0;
        }, 500);
    }
});

// Tecla secreta "Konami Code" para "Hackear" o site
let kCode = "";
const secret = "hack";
document.addEventListener('keydown', (e) => {
    kCode += e.key;
    if (kCode.includes(secret)) {
        alert("ACESSO CONCEDIDO: Protocolo Admin Ativado.");
        document.body.style.background = "black";
        term.textContent = "SYS: HACKED BY ADMIN";
        kCode = "";
    }
});

const consoleUI = document.getElementById('god-console');
const cmdInput = document.getElementById('command-line');

// Atalho: CTRL + K abre o terminal
window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        consoleUI.classList.remove('hidden');
        cmdInput.focus();
    }
    if (e.key === 'Escape') consoleUI.classList.add('hidden');
});

cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = cmdInput.value.trim().toLowerCase();
        
        // Interpretação dos comandos
        if (cmd === 'theme-light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (cmd === 'glitch') {
            document.body.classList.add('glitch-active');
            setTimeout(() => document.body.classList.remove('glitch-active'), 2000);
        } else if (cmd === 'speed') {
            document.documentElement.style.setProperty('--scan-speed', '0.5s');
        } else if (cmd === 'clear') {
            cmdInput.value = '';
        }
        
        consoleUI.classList.add('hidden');
        cmdInput.value = '';
    }
});