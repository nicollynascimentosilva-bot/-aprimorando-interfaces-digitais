// ==========================================
// 1. GERENCIAMENTO DO MODO ESCURO (THEME)
// ==========================================

const themeToggleBtn = document.getElementById('toggle-dark-mode');

/**
 * Aplica o tema escolhido e salva a preferência no navegador
 * @param {boolean} isDark 
 */
const setTheme = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = 'Modo Claro ☀️';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = 'Modo Escuro 🌙';
    }
};

// Verifica se há tema salvo ou usa a preferência do sistema operacional
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme(true);
} else {
    setTheme(false);
}

// Ouvinte de clique para alternar o tema voluntariamente
themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = document.body.classList.contains('dark-mode');
    setTheme(!isCurrentlyDark);
});


// ==========================================
// 2. COMPORTAMENTO DE CLIQUE NOS CARDS (UX)
// ==========================================

// Seleciona todos os cards da página
const postCards = document.querySelectorAll('.post-card');

postCards.forEach(card => {
    // Busca o link interno "Ler mais" de cada card
    const mainLink = card.querySelector('.card-link');
    
    if (!mainLink) return;

    // Torna o card inteiro clicável
    card.addEventListener('click', () => {
        mainLink.click();
    });

    // Permite que o usuário use a tecla "Enter" ao navegar pelo teclado (Tab)
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            mainLink.click();
        }
    });
});
