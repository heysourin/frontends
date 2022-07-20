"use strict";
/*
document.querySelector('.message').textContent='Correct Number 🥳';

document.querySelector('.number').textContent=13;

document.querySelector('.score').textContent=20;

document.querySelector('.guess').value=23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  //converting input into a number as any input os a string type
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "Enter Number Only❗";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥂 Correct Number";

    document.querySelector(".number").textContent = guess;

    document.querySelector("body").style.background = "green";

    document.querySelector(".number").style.width = "30rem";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "⛔ Too high";

    score--;

    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "⛔ Too Low";

    score--;

    document.querySelector(".score").textContent = score;
  }

  if (score < 1) {
    document.querySelector(".message").textContent = "Game Over⛔";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // location.reload();

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  let highScore = 0;

  document.querySelector(".message").textContent = "🤔 Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".highscore").textContent = score++;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = " ";

  //Restoring the styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

