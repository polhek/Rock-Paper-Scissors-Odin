const game = () => {
    // All  variables...
    let playerScore = 0;
    let computerScore = 0;
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const userScore = document.getElementById("user_score");
    const computerScores = document.getElementById("computer_score");
    

    
    
    
    function computerPlay () {
        // array of computer options
        const computerOptions = ["rock", "paper", "scissors"];
    
        const computerNumberChoice = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumberChoice];
        return computerChoice;
    };


    
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

    const playerChoice = () => {
        // player choose rock
        rock.addEventListener('click', function() {
            //console.log("rock");
            game('rock')
        })
        // player choose paper
        paper.addEventListener('click', function() {
            //console.log("paper");
            game('paper');
        })

        // player choose scissors
        scissors.addEventListener('click', function() {
            //console.log('scissors');
            game('scissors');
        })

    function game(playerSelection) {
       
        const computerSelection = computerPlay();
        singleRound(playerSelection, computerSelection);
        
        userScore.textContent = playerScore;
        computerScores.textContent = computerScore;

        // Play the game to 5
        
    };
    
    

        
    };

    playerChoice();
    
    
};
    
game();

