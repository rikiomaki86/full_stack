const secretNumber = Math.floor(Math.random() * 100); // Número aleatório de 0 a 9

    function checkGuess() {
      const input = document.getElementById("userInput").value;
      const result = document.getElementById("result");
      const box = document.getElementById("game-box");

      if (input == secretNumber) {
        result.textContent = "Parabéns! Você acertou!";
        box.style.setProperty("background-color", "lightgreen");
      } else if (input > secretNumber) {
        result.textContent = "Muito alto! Tente um número menor.";
        box.style.setProperty("background-color", "red");
      } else if (input < secretNumber) {
        result.textContent = "Muito baixo! Tente um número maior.";
        box.style.setProperty("background-color", "red");
      } else {
        result.textContent = "Por favor, digite um número válido.";
      }
    }