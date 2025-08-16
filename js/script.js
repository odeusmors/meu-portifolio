// Seleciona o botão do tema
const themeToggle = document.getElementById('theme-toggle');

// Função para aplicar tema
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '🌙';
    }
}

// Checa se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
}

// Alterna tema ao clicar no botão
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    
    // Salva a escolha no localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
