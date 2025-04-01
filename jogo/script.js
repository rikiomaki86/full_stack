let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); 

function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    
    if (userGuess === "" || isNaN(userGuess)) {
        message.textContent = "Por favor, insira um número válido.";
        return;
    }

    userGuess = parseInt(userGuess);

    
    if (userGuess < randomNumber) {
        message.textContent = "O número é maior! Tente novamente.";
        document.body.style.backgroundColor = "red"; 
    } else if (userGuess > randomNumber) {
        message.textContent = "O número é menor! Tente novamente.";
        document.body.style.backgroundColor = "red"; 
         } else {
        message.textContent = "Parabéns! Você acertou o número.";
        document.body.style.backgroundColor = "green"; 
    }
}