const choices = ["rock", "paper", "scissors"]
const winningTuples = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getHumanChoice() {
    let userInput = prompt("Choice").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Choice").toLowerCase();
    }
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanBeatsComputer = winningTuples.some(arr => 
        arr.every((val, index) => val === [humanChoice, computerChoice][index])
    );
    computerBeatsHuman = winningTuples.some(arr => 
        arr.every((val, index) => val === [computerChoice, humanChoice][index])
    );
    humanScore += humanBeatsComputer;
    computerScore += computerBeatsHuman;
    console.log(`You: ${humanChoice}, Computer: ${computerChoice}, Score: ${humanScore}:${computerScore}`);
}

function playGame() {
    for (i = 0; i < 5; ++i) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins!")
    } else {
        console.log("Draw!")
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();







