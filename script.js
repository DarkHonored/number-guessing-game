let targetNumber;
let attempts = 0;
let maxNumber;
let timer;
let elapsedTime = 0;
let scores = [];
let userName = "";

document.getElementById("startGame").addEventListener("click", () => {
    userName = document.getElementById("userName").value.trim();
    if (userName) {
        document.getElementById("user-input").style.display = "none";
        document.getElementById("gameArea").style.display = "block";
        startGame(10); // Start with easy level
    } else {
        alert("Please enter your name!");
    }
});

document.getElementById("easy").addEventListener("click", () => startGame(10));
document.getElementById("medium").addEventListener("click", () => startGame(50));
document.getElementById("hard").addEventListener("click", () => startGame(100));

document.getElementById("submitGuess").addEventListener("click", checkGuess);
document.getElementById("resetGame").addEventListener("click", resetGame);

function startGame(max) {
    maxNumber = max;
    targetNumber = Math.floor(Math.random() * max) + 1;
    attempts = 0;
    elapsedTime = 0;
    document.getElementById("guessInput").disabled = false;
    document.getElementById("submitGuess").disabled = false;
    document.getElementById("resetGame").style.display = "none";
    document.getElementById("scoreArea").style.display = "block";
    document.getElementById("scoreMessage").innerText = `Score: ${calculateScore()}`;
    document.getElementById("timerMessage").innerText = "Time: 0s";
    document.getElementById("hintMessage").innerText = "";
    document.getElementById("message").innerText = `Guess a number between 1 and ${max}`;
    
    startTimer();
}

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    attempts++;

    if (guess === targetNumber) {
        clearInterval(timer);
        alert(`Congratulations, ${userName}! You guessed the number ${targetNumber} in ${attempts} attempts and ${elapsedTime} seconds!`);
        updateLeaderboard(calculateScore());
        resetGame();
    } else if (guess < targetNumber) {
        document.getElementById("message").innerText = "Too low! Try again.";
    } else {
        document.getElementById("message").innerText = "Too high! Try again.";
    }

    document.getElementById("guessInput").value = ""; // Clear input field
    giveHint();
}

function startTimer() {
    timer = setInterval(() => {
        elapsedTime++;
        document.getElementById("timerMessage").innerText = `Time: ${elapsedTime}s`;
    }, 1000);
}

function giveHint() {
    if (attempts === 3) {
        document.getElementById("hintMessage").innerText = `Hint: The number is ${targetNumber % 2 === 0 ? "even" : "odd"}.`;
    }
}

function resetGame() {
    document.getElementById("guessInput").disabled = true;
    document.getElementById("submitGuess").disabled = true;
    document.getElementById("resetGame").style.display = "block";
    clearInterval(timer);
    document.getElementById("leaderboard").style.display = "block";
    displayLeaderboard();
}

function updateLeaderboard(score) {
    scores.push({ name: userName, score: score });
    scores.sort((a, b) => b.score - a.score);
    if (scores.length > 5) scores.pop(); // Keep only top 5 scores
}

function displayLeaderboard() {
    const scoreList = document.getElementById("scoreList");
    scoreList.innerHTML = "";
    scores.forEach(entry => {
        const li = document.createElement("li");
        li.innerText = `${entry.name}: ${entry.score}`;
        scoreList.appendChild(li);
    });
}

function calculateScore() {
    return Math.max(100 - attempts * 10 - elapsedTime, 0); // Score calculation logic
}
