
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

//----------


function getComputerChoice() {
    const CHOICES = ["rock", "paper", "scissors"]
    const randomInt = Math.floor(Math.random() * (3))  //random in 0-2

    return CHOICES[randomInt]
}

/*
[scissors paper rock scissors]
item in list beats next item in list

index = list.indexof(player)
what_it_beats = list[index + 1] ? list[0]

if computer is what_player_beats, player wins
if player is what compu

rock > scissors
scissors > paper
paper > rock
*/

function getWinner(playerChoice, computerChoice) {
    //might be better way of doing this    I am tired rn and I want to get this done
    function whatChoiceBeats(choice){
        switch (choice) {
            case "rock":
                return "scissors";
            case "scissors":
                return "paper";
            case "paper":
                return "rock"
        }
    }

    if (playerChoice === computerChoice){  //tie
        return "tie"
    }
    if (computerChoice === whatChoiceBeats(playerChoice)) {  //playerChoice beats computerChoice
        return "player"
    }
    return "computer"  //proccess of elimination: computerChoice beats playerChoice

}



//whats better, storing the scores or passing in the scores. Im gonna go with storing
//If I were coding in python where im more comfortable i might make a game object/class or something. But for now I will just put the code near itself
let playerScore = 0
let computerScore = 0
function playRound(playerChoice) {
    playerChoice = playerChoice.toLowerCase()

    const input_is_valid = ["rock", "paper", "scissors"].includes(playerChoice)
    if (!input_is_valid) {
        throw new Error("Invalid Input")
        return "oopsy"  //   idk what the convention might be -- exception or something like -1
    }

    const computerChoice = getComputerChoice()

    //calculate winner
    const winner = getWinner(playerChoice, computerChoice)
    
    //change scores
    if (winner === "player")
        playerScore++;
    else if (winner === "computer")
        computerScore++;
 
    return {
        winner: winner,
        playerScore: playerScore,
        computerScore: computerScore,
        computerChoice: computerChoice,
        playerChoice: playerChoice,
        gameOver: false, //not yet implemented
        gameWinner: "None",
    }

    //return `P: ${playerChoice}  C: ${computerChoice}`

}


export {playRound as gameInput}