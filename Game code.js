
// Function for computer hand, which will choose on random if computer chooses: "Rock", "Paper", "Scissors". 


let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    // array of computer options
    const computerOptions = ["rock", "paper", "scissors"];

    const computerNumberChoice = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumberChoice];
    return computerChoice;
};



// Function that plays a single round of Rock, Paper, Scissors. 

function singleRound(playerSelection, computerSelection) {
    
   

    // Tie
    if (playerSelection === computerSelection) {
        console.log("It is a tie.");
        return;
    } 

    // Rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You won the round.");
            playerScore++;
            return;
        } else {
            console.log("You lost the round.");
            computerScore++;
            return;
        }
    }

    // Paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lost the round.");
            computerScore++;
            return;
        } else {
            console.log("You won the round.");
            playerScore++;
            return;
        }
    }

    // Scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lost the round.");
            computerScore++;
            return;
        } else {
            console.log("You won the round.");
            playerScore++;
            return;
        }
    }
    return computerScore, playerScore;
    //console.log("Player has " + playerScore + "points, and computer has " + computerScore + "points.");
    
};




// 5 round game - function, with loop that plays the game only 5 times...

function game() {
  for (let round = 1; round <= 5; round++) {
    // Player selection, prompt...
    playerSelection = prompt("Pick between rock, paper, scissors... And the game will begin! ").toLowerCase();
    
    // Computer Selection
    const computerSelection = computerPlay();

    // Call the round function to start the game.
    singleRound(playerSelection, computerSelection);
    console.log("Player has " + playerScore + "points, and computer has " + computerScore + "points.");
    

    // When is the last round, so round 5 it tells you who won more rounds.

    if (round === 5) {
        if (playerScore > computerScore) {
            console.log("You have won.");
        } else {
            console.log("Computer has won.")
        }
    };

  }
}

game();


/* const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(singleRound(playerSelection, computerSelection)); */