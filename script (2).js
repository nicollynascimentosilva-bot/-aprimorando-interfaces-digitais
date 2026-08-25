// Mapeia o botão do HTML
const themeToggleBtn = document.getElementById('toggle-dark-mode');

// Adiciona o evento de clique para alternar as classes de tema
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
