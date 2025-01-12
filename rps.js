function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function disableChoiceButtons() {
    choiceButtons.forEach(button => button.disabled = true)
}

function enableChoiceButtons() {
    choiceButtons.forEach(button => button.disabled = false)
}

function updateScoreText() {
    if (playerScore == WINNING_SCORE) {
        scoreText.textContent = "You win!"
        disableChoiceButtons();
    } else if (computerScore == WINNING_SCORE) {
        scoreText.textContent = "Computer wins!"
        disableChoiceButtons();
    } else {
        scoreText.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    playerBeatsComputer = winningTuples.some(arr => 
        arr.every((val, index) => val === [playerChoice, computerChoice][index])
    );
    computerBeatsPlayer = winningTuples.some(arr => 
        arr.every((val, index) => val === [computerChoice, playerChoice][index])
    );
    playerScore += playerBeatsComputer;
    computerScore += computerBeatsPlayer;
    updateScoreText();
}

let playerScore = 0;
let computerScore = 0;

const WINNING_SCORE = 5;
const choices = ["rock", "paper", "scissors"]
const winningTuples = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]

const choiceButtons = document.querySelectorAll(".choice-btn");
choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    })
})

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
    resetScore();
    updateScoreText();
    enableChoiceButtons();
})

const scoreDiv = document.createElement("div");
const scoreText = document.createElement("p");
scoreText.textContent = `Player: ${playerScore} Computer: ${computerScore}`
scoreDiv.appendChild(scoreText);
document.body.appendChild(scoreDiv);




