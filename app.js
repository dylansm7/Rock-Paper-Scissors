console.log("ROCK PAPER SCISSORS");
console.log("LET'S PLAY")

let playerSelection;
let computerSelection;
let userScore = 0;
let computerScore = 0;

const userOption = document.querySelector('.userOption');
const computerOption = document.querySelector('.computerOption');

const rockImage = document.createElement('img');
const paperImage = document.createElement('img');
const scissorsImage = document.createElement('img');

const userScoreScreen = document.querySelector('.userScore');
const computerScoreScreen = document.querySelector('.computerScore');
const userScoreH4 = document.createElement('h4');
userScoreH4.textContent =`User Score: ${userScore}`;
const computerScoreH4 = document.createElement('h4');
computerScoreH4.textContent = `Computer Score: ${computerScore}`;

rockImage.setAttribute('src', './images/rock.png')
paperImage.setAttribute('src', './images/paper.png')
scissorsImage.setAttribute('src', './images/scissors.png')

let choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice () {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}


function singleRound(playerSelection, computerSelection){

  computerSelection = getComputerChoice();

  const userImage = userOption.querySelector('.user-image');
  const computerImage = computerOption.querySelector('.computer-image');

  if (userImage && userOption.contains(userImage)) {
    userOption.removeChild(userImage);
  }
  if (computerImage && computerOption.contains(computerImage)) {
    computerOption.removeChild(computerImage);
  }

  // Add new images
  if (playerSelection === 'Rock') {
    const rockImageClone = rockImage.cloneNode(true);
    rockImageClone.classList.add('user-image');
    userOption.appendChild(rockImageClone);
  } else if (playerSelection === 'Paper') {
    const paperImageClone = paperImage.cloneNode(true);
    paperImageClone.classList.add('user-image');
    userOption.appendChild(paperImageClone);
  } else if (playerSelection === 'Scissors') {
    const scissorsImageClone = scissorsImage.cloneNode(true);
    scissorsImageClone.classList.add('user-image');
    userOption.appendChild(scissorsImageClone);
  }

  if (computerSelection === 'Rock') {
    const rockImageClone = rockImage.cloneNode(true);
    rockImageClone.classList.add('computer-image');
    computerOption.appendChild(rockImageClone);
  } else if (computerSelection === 'Paper') {
    const paperImageClone = paperImage.cloneNode(true);
    paperImageClone.classList.add('computer-image');
    computerOption.appendChild(paperImageClone);
  } else if (computerSelection === 'Scissors') {
    const scissorsImageClone = scissorsImage.cloneNode(true);
    scissorsImageClone.classList.add('computer-image');
    computerOption.appendChild(scissorsImageClone);
  }
  
  if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Scissors" && playerSelection === "Rock" ) {
    userScore++;
    console.log('user score' + userScore);
  } else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++
    // computerScoreH4.textContent = `Computer Score: ${computerScore}`;
    console.log('computer score' + computerScore);
  }else if (computerSelection === playerSelection) {
  }

  document.getElementById('user-score').textContent = `User Score: ${userScore}`;
  document.getElementById('computer-score').textContent = `Computer Score: ${computerScore}`;

 
  if(userScore === 5){
    alert("YOU WIN! CONGRATULATIONS");
    userScore = 0;
    computerScore = 0;
  }else if (computerScore === 5){
    alert("YOU LOSE! YOU ARE A BIG DISAPPOINTMENT TO YOUR FAMILY!");
    userScore = 0;
    computerScore = 0;
  }

}




// Html eventlisteners and buttons
const rockButton = document.querySelector('#btn-rock');
const paperButton = document.querySelector('#btn-paper');
const scissorsButton = document.querySelector('#btn-scissors');

rockButton.addEventListener('click', () => {
  playerSelection = 'Rock';
  // computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
  playerSelection = 'Paper';
  // computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
  playerSelection = 'Scissors';
  // computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
});




// function game(){

  // let userScore = 0;
  // let computerScore = 0;

  

//   for (let i = 1; i <= 5; i++) {
    
//     console.log("Round: " + i);

//     let computerSelection = getComputerChoice();
    
//     console.log('Click a button');
//     let match = singleRound(playerSelection, computerSelection)
//     console.log(match);

//     // alert('Select your option');
    // if (match == `You Win! ${playerSelection} beats ${computerSelection}!`){
    //   userScore++;
    //   console.log(`Current Score: User= ${userScore}, Computer= ${computerScore}`);
    // } else if (match == `You Lose! ${computerSelection} beats ${playerSelection}!`){
    //   computerScore++;
    //   console.log(`Current Score: User= ${userScore}, Computer= ${computerScore}`);
    // }
    
//   }

  // alert(`Final Score:
  // Computer: ${computerScore},
  // User:     ${userScore}`);
  
//   if (userScore > computerScore) {
//     return alert("YOU WIN! CONGRATULATIONS");
//   } else if (userScore < computerScore) {
//     return alert("YOU LOSE! YOU ARE A BIG DISAPPOINTMENT TO YOUR FAMILY!");
//   } else {
//     return alert("IT'S A TIE!")
//   }
// }




// game();

