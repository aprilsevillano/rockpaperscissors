function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    option = ["rock", "paper", "scissors"];
    return option[random];
}

function playRound(playerSelection, computerSelection) {

    let outcome = "";

    if (playerSelection === computerSelection) {
        
        return outcome = "It's a tie!";
    }

    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")){

        return outcome = ("You win! " + playerSelection + " beats " + computerSelection);

    } else 

        return outcome = ("You lose! " + computerSelection + " beats " + playerSelection);

}

function getPlayerChoice() {
    let request = prompt("Rock, paper, scissors?");
    return request.toLowerCase();
}

function playGame() {
    for (let i = 0; i < 5; i++)  {
        playRound();

        const playerSelection = getPlayerChoice();

        console.log("Player: " + playerSelection);
        
        const computerSelection = getComputerChoice();

        console.log("Computer: " + computerSelection);
        
        console.log(playRound(playerSelection, computerSelection));
        
    }
}

playGame();     