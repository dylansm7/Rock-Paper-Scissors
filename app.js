console.log("ROCK PAPER SCISSORS");
console.log("LET'S PLAY")

let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function singleRound(playerSelection, computerSelection){
  if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Rock" ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You Lose! ${computerSelection} beats ${playerSelection}!`;
  } else if (computerSelection === playerSelection) {
        return "It's a tie! Play again!";
      }
}


function game(){

  let userScore = 0;
  let computerScore = 0;

  

  for (let i = 1; i <= 5; i++) {
    
    console.log("Round: " + i);

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please enter a choice between 'Rock Paper Scissors'.").toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1 , playerSelection.length);

    let match = singleRound(playerSelection, computerSelection)
    console.log(match);

    if (match == `You Win! ${playerSelection} beats ${computerSelection}!`){
      userScore++;
      console.log(`Current Score: User= ${userScore}, Computer= ${computerScore}`);
    } else if (match == `You Lose! ${computerSelection} beats ${playerSelection}!`){
      computerScore++;
      console.log(`Current Score: User= ${userScore}, Computer= ${computerScore}`);
    }
  }

  alert(`Final Score:
  Computer: ${computerScore},
  User:     ${userScore}`);
  
  if (userScore > computerScore) {
    return alert("YOU WIN! CONGRATULATIONS");
  } else if (userScore < computerScore) {
    return alert("YOU LOSE! YOU ARE A BIG DISAPPOINTMENT TO YOUR FAMILY!");
  } else {
    return alert("IT'S A TIE!")
  }
}

game();

