const game = () => {
    // All  variables...
    let playerScore = 0;
    let computerScore = 0;
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const userScore = document.getElementById("user_score");
    const computerScores = document.getElementById("computer_score");
    const winningText = document.querySelector(".winning_text p");

    function reloadThePage() {
        window.location.reload();
    };
    


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
            winningText.textContent = "It is a tie.";
            return;
        } 
    
        // Rock
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                console.log("You won the round.");
                winningText.textContent = "You won the round.";
                playerScore++;
                return;
            } else {
                winningText.textContent = "You lost the round.";
                console.log("You lost the round.");
                computerScore++;
                return;
            }
        }
    
        // Paper
        if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                winningText.textContent = "You lost the round.";
                console.log("You lost the round.");
                computerScore++;
                return;
            } else {
                console.log("You won the round.");
                winningText.textContent = "You won the round.";
                playerScore++;
                return;
            }
        }
    
        // Scissors
        if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                console.log("You lost the round.");
                winningText.textContent = "You lost the round.";
                computerScore++;
                return;
            } else {
                console.log("You won the round.");
                winningText.textContent = "You won the round.";
                playerScore++;
                return;
            }
        }
        return computerScore, playerScore;
        //console.log("Player has " + playerScore + "points, and computer has " + computerScore + "points.");
        
    };

    const playerChoice = () => {
      rock.addEventListener("click", function () {
        //console.log("rock");
        game("rock");
      });
      // player choose paper
      paper.addEventListener("click", function () {
        //console.log("paper");
        game("paper");
      });

      // player choose scissors
      scissors.addEventListener("click", function () {
        //console.log('scissors');
        game("scissors");
      });

      const startTheGame = () => {
        const intro = document.querySelector(".play_game");
        const match = document.querySelector(".choices");
        const playButton = document.querySelector(".play_game_button");

        playButton.addEventListener("click", () => {
          intro.classList.add("fadeOut");
          match.classList.add("fadeIn");
          match.style.removeProperty("display");
        });
      };

      function game(playerSelection) {
        const computerSelection = computerPlay();
        singleRound(playerSelection, computerSelection);

        userScore.textContent = playerScore;
        computerScores.textContent = computerScore;
        // Play the game to 5
        if (playerScore === 5 && computerScore < 5) {
          winningText.textContent =
            "You have won with the score of " +
            playerScore +
            " to " +
            computerScore +
            "...";

          return;
        } else if (playerScore < 5 && computerScore === 5) {
          winningText.textContent =
            "Computer has won with the score of " +
            computerScore +
            " to " +
            playerScore +
            "...";

          return;
        };

        function reloadThePage() {
            window.location.reload();
        };

        if (playerScore > 5 || computerScore > 5) {
            setTimeout(reloadThePage(), 115000);
        };

        
      }
      startTheGame();
    };
    playerChoice();
    
    
};
    
game();

