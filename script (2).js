// 1. Banco de dados simulado (Array de Objetos)
const postsData = [
    { id: 1, tag: "Code", title: "Dominando JavaScript", desc: "Entenda closures, promises e async/await de uma vez por todas.", img: "https://picsum.photos" },
    { id: 2, tag: "Design", title: "Tendências de UI/UX", desc: "Como usar Glassmorphism e interações fluidas nos seus projetos.", img: "https://picsum.photos" },
    { id: 3, tag: "DevOps", title: "Introdução ao Docker", desc: "Aprenda a isolar suas aplicações em containers de forma prática.", img: "https://picsum.photos" },
    { id: 4, tag: "Code", title: "CSS Moderno Avançado", desc: "Explore subgrid, container queries e funções matemáticas no CSS.", img: "https://picsum.photos" }
];

const gridContainer = document.getElementById('cards-grid');
const searchInput = document.getElementById('search-input');
const themeToggleBtn = document.getElementById('toggle-dark-mode');

// 2. Função para renderizar os cards na tela
function renderCards(posts) {
    // Limpa o grid antes de desenhar
    gridContainer.innerHTML = ""; 
    
    // Mapeia o array e cria o HTML de cada card
    posts.forEach(post => {
        const cardHTML = `
            <article class="post-card">
                <img src="${post.img}" alt="${post.title}" class="card-img" loading="lazy">
                <div class="card-content">
                    <span class="card-tag">${post.tag}</span>
                    <h2 class="card-title">${post.title}</h2>
                    <p class="card-excerpt">${post.desc}</p>
                </div>
            </article>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}

// 3. Sistema de Filtro/Busca em Tempo Real
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Filtra os dados se o título ou a tag incluírem o texto digitado
    const filteredPosts = postsData.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.tag.toLowerCase().includes(searchTerm)
    );
    
    renderCards(filteredPosts);
});

// 4. Alternador de Modo Escuro Simples
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDark ? "Modo Claro" : "Modo Escuro";
});

// Inicializa a página mostrando todos os cards
renderCards(postsData);
