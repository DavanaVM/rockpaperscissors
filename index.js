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

let playerchoice = ""

document.addEventListener('click', (e) => {
    if(e.target.id === "rock" || e.target.id === "paper" || e.target.id === "scissors"){
        playerchoice = (e.target.id)
        choicedisp.textContent = "Your choice: " + playerchoice
    }
});
  
const main = document.querySelector("#main")
let humanscore = 0;
let botscore = 0;
let choicedisp = document.createElement("p");
choicedisp.textContent = "Please select one"
main.appendChild(choicedisp)
const btn = document.createElement("button")
btn.textContent = "Confirm Choice"
main.appendChild(btn)

btn.addEventListener('click', (e) =>{
    let compchoice = getComputerChoice()
    let result = playRound(playerchoice, compchoice)
    choicedisp.textContent =  result + " computer chose: " +  compchoice;

    if(result === "You lose!"){
        botscore++
    }
    else if(result == "You win!"){
        humanscore++
    }
})

  /*const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  console.log(computerSelection)*/