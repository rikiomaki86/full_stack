const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Função para desenhar um quadrado
function desenhar_quadrado(x, y, tamanho, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, tamanho, tamanho);
}

// Função para desenhar uma linha
function desenhar_linha(x1, y1, x2, y2, cor) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Função para desenhar um arco
function desenhar_arco(x, y, raio, anguloInicial, anguloFinal, cor) {
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, raio, anguloInicial, anguloFinal);
    ctx.stroke();
}

// Função para escrever no canvas
function escrever(texto, x, y, cor) {
    ctx.fillStyle = cor;
    ctx.font = "16px Arial";
    ctx.fillText(texto, x, y);
}

// Desenho conforme o modelo solicitado
desenhar_quadrado(50, 50, 100, 'red'); // Desenha um quadrado vermelho
desenhar_linha(50, 50, 150, 150, 'blue'); // Desenha uma linha azul
desenhar_arco(200, 150, 50, 0, Math.PI, 'green'); // Desenha um arco verde
escrever("Texto no Canvas", 50, 200, 'purple'); // Escreve um texto roxo