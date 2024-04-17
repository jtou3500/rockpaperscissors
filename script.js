const prompt = require("prompt-sync")({sigint:true});

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;

    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else if (num === 3) {
        return "scissors";
    }
}

function getPlayerChoice() {
    
    while (true) {
        let choice = prompt("Type Rock/Paper/Scissors: ").toLowerCase();
        
        if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            console.log();
            continue;
        } else {
            return choice;
        }
    }

    return choice;

}

function playRound(name, roundNum) {

    console.log("\nRound #" + roundNum + "\n");

    let player = getPlayerChoice();
    let pc = getComputerChoice();

    console.log();

    if (player === pc) {
        console.log("TIE!\n");
    } else if ((player === "rock" && pc === "scissors") || (player === "paper" && pc === "rock") || (player === "scissors" && pc === "paper")) {
        console.log(name + " WINS!");
        return true;
    } else if ((player === "rock" && pc === "paper") || (player === "paper" && pc === "scissors") || (player === "scissors" && pc === "rock")) {
        console.log("The Computer WINS!");        
        return false;
    }

}

function playGame() {
    const name = prompt("Please enter your name: ");

    let playerWins = 0;
    let pcWins = 0;

    for (let i = 1; i <= 5; i++) {
        let winner = playRound(name, i);

        if (winner) {
            playerWins++;
        } else {
            pcWins++;
        }
    }
    
    console.log("\n===============================");
    console.log("Final Score: " + playerWins + " : " + pcWins + "\n");
    console.log("===============================");

    if (playerWins > pcWins) {
        console.log(name + " WINS!");
    } else if (playerWins < pcWins) {
        console.log(name + " LOSES!");
    } else {
        console.log("It is a TIE!");
    }
}

playGame();