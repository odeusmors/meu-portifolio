// --- Toggle do tema ---
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// --- Menu Mobile ---
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    // Abrir/fechar menu ao clicar no botão
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // evita fechar instantaneamente
        menu.classList.toggle('show');
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
}
