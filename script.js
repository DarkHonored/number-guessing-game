let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congrats, Durid Yasser AlMallouhi! You guessed it in ${attempts} tries!`;
        feedback.style.color = 'green';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high, Durid! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Too low, Durid! Try again.';
        feedback.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
}
