let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congrats! You guessed it in ${attempts} tries!`;
        feedback.style.color = 'green';
    } else if (userGuess > randomNumber) {
        feedback.textContent = `Your guess of ${userGuess} is too high! Try a lower number.`;
        feedback.style.color = 'red';
    } else {
        feedback.textContent = `Your guess of ${userGuess} is too low! Try a higher number.`;
        feedback.style.color = 'red';
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
}

let maxNumber;
let attemptsLeft;

function setDifficulty(level) {
  if (level === 'easy') {
    maxNumber = 100;
    attemptsLeft = 10;
  } else if (level === 'medium') {
    maxNumber = 1000;
    attemptsLeft = 7;
  } else if (level === 'hard') {
    maxNumber = 10000;
    attemptsLeft = 5;
  }
  startGame();
}

function startGame() {
  let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
  // Add logic to start the game with the chosen difficulty
  console.log(`Secret Number: ${secretNumber}, Attempts Left: ${attemptsLeft}`);
}
