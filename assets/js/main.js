//global game variables
const GameCards = document.querySelectorAll(".small-card");
const GameCardsArea = document.querySelectorAll(".small-cards")[0];
const RoundWinArea = document.getElementById("round-win");
const playAgainBtn = document.querySelector("#play-again");
// console logs of user and computer scores
// are added for assessor to check and validate
//game logic
let UserScore = 0;
let ComputerScore = 0;
let playerChoice;
let computerChoice;

const Choices = ["rock", "paper", "scissors"];

// handling computer choice
function GetComputerChoice() {
  computerChoice = Choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//updating a score variables
function updateScore() {
  document.getElementById("user-score").textContent = UserScore;
  document.getElementById("comp-score").textContent = ComputerScore;
  declareWinner();
}

function PlayGame() {
  GetComputerChoice();
  console.log(computerChoice);
  GameCards.forEach((card) =>
    card.addEventListener("click", function (e) {
      //splitting the first class name until whitespace
      //since eventlistener is added to a div and inside a div there is
      // paragraph and icon so clicking any of them without "split method" adjustment
      // would lead to correct user choice displayed only if clicked on the actual div
      //with the id of game-choices
      playerChoice = e.target.className.split(" ")[0];

      console.log(playerChoice);
      GameCardsArea.classList.add("d-none");
      roundWinner(computerChoice, playerChoice);
    })
  );
}

function showRoundWinner(text) {
  RoundWinArea.classList.remove("d-none");
  let div = document.createElement("div");
  RoundWinArea.prepend(text, div);
}

//calculating winner of a round
function roundWinner(com, user) {
  if (user == com) {
    showRoundWinner("this Round is a Tie");
  } else if (
    (user === "rock" && com === "scissors") ||
    (user === "paper" && com === "rock") ||
    (user === "scissors" && com === "paper")
  ) {
    showRoundWinner("You win");
    UserScore++;
  } else {
    showRoundWinner("Computer wins round");
    ComputerScore++;
  }
  updateScore();
}

//show and  hide elements after every round
// and updating the score
function resetRound() {
  GetComputerChoice();
  console.log(computerChoice);
  updateScore();
  RoundWinArea.classList.add("d-none");
  GameCardsArea.classList.remove("d-none");
  RoundWinArea.firstChild.remove();
}

// handling the game winner and reset the score
function declareWinner() {
  setTimeout(() => {
    if (UserScore === 5) {
      UserScore = 0;
      ComputerScore = 0;
      alert("You win the game");
      RoundWinArea.firstChild.textContent = "Game over";
    } else if (ComputerScore === 5) {
      UserScore = 0;
      ComputerScore = 0;
      alert("Computer wins a game");
      RoundWinArea.firstChild.textContent = "Game Over";
    }
  }, 400);
}
PlayGame();
playAgainBtn.addEventListener("click", resetRound);
