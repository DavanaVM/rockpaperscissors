function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
function getComputerChoice(){
    let rand = Math.floor(Math.random()* 3);
    let choice = "";
    switch(rand){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2: 
            choice = "scissors"
    }
    return choice;
}

function playRound(player, computer){
    if(player == computer){
        return "It's a tie!"
    }
    else if((player == "rock" && computer == "scissors") || (player == "scissors" && computer == "paper" || player == "paper" && computer == "rock")){
        return "You win!"
    }
    else{
        return "You lose!"
    }
}

  let playerSelection = prompt("Rock Paper or Scissors").toLowerCase();
  while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
    playerSelection = prompt("You need to select Rock Paper or Scissors!").toLowerCase();
  }
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  console.log(computerSelection)