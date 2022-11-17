function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"]
    const randomInt = Math.floor(Math.random() * (3))  //random in 0-2

    return CHOICES[randomInt]
}

//OLD UNUSED CODE (you can run consoleGame() in the console)

//pointless abstraction maybe?
function playMatch(playerA, playerB) {
    // Rock > Scissors  Scissors > Paper    Paper > Rock

    playerA = playerA.toLowerCase().trim()
    playerB = playerB.toLowerCase().trim()
    const choices = ["rock", "paper", "scissors"]
    if (!choices.includes(playerA) || !choices.includes(playerB)) {
        throw "Invalid Input"
    }
    
    
    if (playerA === playerB)
        return "tie"
    
    
    if (playerA === "rock") {
        if (playerB == "scissors")
            return "player A"
        return "player B"
    }
    else if (playerA === "paper"){
        if (playerB === "rock")
            return "player A"
        return "player B"
    }
    else if (playerA === "scissors"){
        if (playerB === "paper")
            return "player A"
        return "player B"
    }
}



function getPlayerChoice() {
    return prompt("enter your choice")
}

function consoleGame() {
    let playerScore = 0
    let computerScore = 0
    
    for (let index = 0; index < 3; index++) {
        let winner;
        ({ winner, playerScore, computerScore } = playRoun(playerScore, computerScore, getPlayerChoice(), getComputerChoice()))
        console.log(winner);
    }
    console.log(playerScore)
}

function playRoun(playerScore, computerScore, playerChoice, computerChoice) {
    // const playerChoice = getPlayerChoice()
    //const computerChoice = getComputerChoice()

    let winnerOut
    let matchWinner = playMatch(playerChoice, computerChoice)
    switch (matchWinner) {
        case "tie":
            winnerOut = "Tie"
            console.log("Tie!")
            break

        case "player A":
            console.log("Player Wins!")
            winnerOut = "Player"
            playerScore += 1
            break

        case "player B":
            console.log("Computer Wins!")
            winnerOut = "Computer"
            computerScore += 1
            break

        default:
            throw "winner undefined"
    }
    return { winnerOut, playerScore, computerScore }
}
//Old code ends




//whats better, storing the scores or passing in the scores. Im gonna go with storing
//If I were coding in python where im more comfortable i might make a game object/class or something. But for now I will just put the code near itself
let playerScore = 0
let computerScore = 0
function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase()

    const input_is_valid = ["rock", "paper", "scissors"].includes(playerChoice)
    if (!input_is_valid) {
        return "oopsy"  //TODO
    }


    //const playerChoice = playerChoice
    const computerChoice = getComputerChoice()

    const winner = "tie"
 
    return {
        winner: winner,
        playerScore: playerScore,
        computerScore: computerScore,
    }

    //return `P: ${playerChoice}  C: ${computerChoice}`

}


export {playRound as gameInput}