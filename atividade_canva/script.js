const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        function desenhar_quadrado(x, y, tamanho, cor) {
            ctx.fillStyle = cor;
            ctx.fillRect(x, y, tamanho, tamanho);
        }

        function desenhar_linha(x1, y1, x2, y2, cor) {
            ctx.strokeStyle = cor;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        function desenhar_arco(x, y, raio, cor) {
            ctx.strokeStyle = cor;
            ctx.beginPath();
            ctx.arc(x, y, raio, 0, Math.PI * 2);
            ctx.stroke();
        }

        function escrever(texto, x, y) {
            ctx.font = "20px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(texto, x, y);
        }

        // Desenhando a figura conforme o modelo
        desenhar_quadrado(0, 0, 50, "blue");
        desenhar_quadrado(250, 0, 50, "red");
        desenhar_quadrado(0, 250, 50, "yellow");
        desenhar_quadrado(250, 250, 50, "black");
        desenhar_linha(0, 0, 150, 150, "blue");
        desenhar_linha(300, 0, 150, 150, "red");
        desenhar_arco(150, 150, 20, "cyan");
        escrever("Canvas", 120, 50);