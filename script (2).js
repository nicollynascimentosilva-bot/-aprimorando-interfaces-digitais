// CONTROLE DE TEMA (DARK / LIGHT)
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// SISTEMA INTERATIVO DOS JOGOS
let gameInterval;
let snake = [];
let food = {};
let dx = 20;
let dy = 0;
let score = 0;
let clickerScore = 0;

function openGame(gameType) {
    const modal = document.getElementById('game-modal');
    const title = document.getElementById('game-title');
    const canvas = document.getElementById('gameCanvas');
    const clickerArena = document.getElementById('clicker-arena');
    
    modal.style.display = 'flex';
    clearInterval(gameInterval);
    
    if (gameType === 'snake') {
        title.innerText = '🐍 Jogo da Cobrinha (Use as Setas)';
        canvas.style.display = 'block';
        clickerArena.style.display = 'none';
        startSnakeGame();
    } else {
        title.innerText = '⚡ Cyber Clicker (Seja Rápido!)';
        canvas.style.display = 'none';
        clickerArena.style.display = 'block';
        startClickerGame();
    }
}

function closeGame() {
    document.getElementById('game-modal').style.display = 'none';
    clearInterval(gameInterval);
}

// LÓGICA DO JOGO SNAKE
function startSnakeGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    snake = [{x: 160, y: 160}, {x: 140, y: 160}, {x: 120, y: 160}];
    dx = 20; dy = 0;
    genFood();
    
    document.addEventListener('keydown', changeDirection);
    gameInterval = setInterval(() => {
        clearCanvas(ctx, canvas);
        drawFood(ctx);
        moveSnake();
        drawSnake(ctx);
    }, 100);
}

function clearCanvas(ctx, canvas) {
    ctx.fillStyle = '#050b14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(ctx) {
    snake.forEach(part => {
        ctx.fillStyle = '#10b981';
        ctx.fillRect(part.x, part.y, 18, 18);
    });
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    
    // Atravessar paredes de forma infinita
    if (head.x < 0) head.x = 380;
    if (head.x >= 400) head.x = 0;
    if (head.y < 0) head.y = 380;
    if (head.y >= 400) head.y = 0;
    
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        genFood();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37; const RIGHT_KEY = 39;
    const UP_KEY = 38; const DOWN_KEY = 40;
    const keyPressed = event.keyCode;
    
    if (keyPressed === LEFT_KEY && dx === 0) { dx = -20; dy = 0; }
    if (keyPressed === UP_KEY && dy === 0) { dx = 0; dy = -20; }
    if (keyPressed === RIGHT_KEY && dx === 0) { dx = 20; dy = 0; }
    if (keyPressed === DOWN_KEY && dy === 0) { dx = 0; dy = 20; }
}

function genFood() {
    food.x = Math.floor(Math.random() * 20) * 20;
    food.y = Math.floor(Math.random() * 20) * 20;
}

function drawFood(ctx) {
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(food.x, food.y, 18, 18);
}

// LÓGICA DO JOGO CLICKER
function startClickerGame() {
    clickerScore = 0;
    document.getElementById('click-score').innerText = clickerScore;
    const btn = document.getElementById('target-btn');
    
    btn.onclick = () => {
        clickerScore++;
        document.getElementById('click-score').innerText = clickerScore;
        btn.style.marginLeft = Math.random() * 100 + 'px';
        btn.style.marginTop = Math.random() * 50 + 'px';
    };
}
