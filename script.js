let targetNumber;
let attempts = 0;
let maxNumber;

document.getElementById("easy").addEventListener("click", () => {
    startGame(10);
});

document.getElementById("medium").addEventListener("click", () => {
    startGame(50);
});

document.getElementById("hard").addEventListener("click", () => {
    startGame(100);
});

document.getElementById("submitGuess").addEventListener("click", checkGuess);

function startGame(max) {
    maxNumber = max;
    targetNumber = Math.floor(Math.random() * max) + 1; // Random number between 1 and max
    attempts = 0;

    document.getElementById("guessInput").disabled = false;
    document.getElementById("submitGuess").disabled = false;
    document.getElementById("message").innerText = `Guess a number between 1 and ${max}`;
}

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    attempts++;

    if (guess === targetNumber) {
        document.getElementById("message").innerText = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts!`;
        resetGame();
    } else if (guess < targetNumber) {
        document.getElementById("message").innerText = "Too low! Try again.";
    } else {
        document.getElementById("message").innerText = "Too high! Try again.";
    }

    document.getElementById("guessInput").value = ""; // Clear input field
}

function resetGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("submitGuess").disabled = true;
}
