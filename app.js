// TODO
// 1. keep turn
// 2. keep score for each player
// 3. rolling score keeper
// 4. check 1 and change turn
// 5. check if score is above 100

let activePlayer = 0;
let scores = [ 0, 0 ];

let roundScore = 0;

let dice = Math.floor(Math.random() * 6) + 1;
// Reset game
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
