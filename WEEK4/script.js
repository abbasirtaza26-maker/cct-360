let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let minRange = 1;
let maxRange = 100;

const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const body = document.body;

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Enter a number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = "Attempts: " + attempts;

  if (guess < targetNumber) {
    minRange = Math.max(minRange, guess + 1);
    message.textContent = "Too low! Try between " + minRange + " and " + maxRange + ".";
    body.style.background = "#d9e8f5";
  } else if (guess > targetNumber) {
    maxRange = Math.min(maxRange, guess - 1);
    message.textContent = "Too high! Try between " + minRange + " and " + maxRange + ".";
    body.style.background = "#f5d9d9";
  } else {
    message.textContent = "Correct! You got it in " + attempts + " tries.";
    body.style.background = "#d9f5d9";
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  minRange = 1;
  maxRange = 100;
  attemptsDisplay.textContent = "Attempts: 0";
  message.textContent = "Make your first guess!";
  guessInput.value = "";
  body.style.background = "#eef2f7";
});