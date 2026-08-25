const themeToggleBtn = document.getElementById('toggle-dark-mode');

// 1. Função para aplicar o tema correto
const setTheme = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
};

// 2. Verificar preferência salva ou o padrão do sistema operacional
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Inicializa a página com o tema correto
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme(true);
} else {
    setTheme(false);
}

// 3. Ouvinte de clique para alternar o tema voluntariamente
themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setTheme(!isCurrentlyDark); // Inverte o estado atual
});
