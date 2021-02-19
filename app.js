/*
 *  Author: Nasantogtokh Amarsaikhan
 *  Simple dice game in Javascript
 *  Date: 2021-02-20
 * */

// Global variables
let activePlayer = 0;
let scores = [ 0, 0 ];
let roundScore = 0;

// DOM selectors
let scoreOneDom = document.getElementById("score-0");
let scoreTwoDom = document.getElementById("score-1");
let currentOneDom = document.getElementById("current-0");
let currentTwoDom = document.getElementById("current-1");
let diceDom = document.querySelector(".dice");

function resetGame() {
  if (activePlayer){
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
  }
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  scoreOneDom.textContent = 0;
  scoreTwoDom.textContent = 0;
  currentOneDom.textContent = 0;
  currentTwoDom.textContent = 0;
  diceDom.style.display = "none";
}

function changeTurn() {
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
  activePlayer = (activePlayer) ? 0 : 1;
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");
  diceDom.style.display = "none";
}

resetGame();

document.querySelector(".btn-roll").addEventListener("click", () => {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1){
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    changeTurn();
    currentOneDom.textContent = roundScore;
    currentTwoDom.textContent = roundScore;
  }
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  scores[activePlayer] += roundScore;
  if(scores[activePlayer] >= 100){
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    alert("ЯЛАГЧ бол  PLAYER " + (activePlayer + 1));
    resetGame();
  }
  else {
    roundScore = 0;
    currentOneDom.textContent = 0;
    currentTwoDom.textContent = 0;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    changeTurn();
  }
});

document.querySelector(".btn-new").addEventListener("click", resetGame);
