"use strict"

import { gameInput } from "./game.js"

const form = document.querySelector("#input-form")

form.addEventListener("submit", onFormSubmitted )

function onFormSubmitted(event){
    event.preventDefault()
    const form = event.currentTarget
    const inputBox = form.querySelector("input#x")
    
    //output(inputBox.value)
    //game(inputBox.value)
    
    playRound(inputBox.value)
    //TODO: theatrically display computer choice and winner
    
    inputBox.value = "";   //Question: this works, but if I store InputX.value as one variable, changing it with = just changes the variable, not the thing in the DOM that it is pointing at, so what if I wanted a pointer so to speak in one variable?
}




async function playRound(input) {
    //TODO: make it not let you play multiple rounds at the same time... I guess you could have a playingRound = true/false variable
    try {
        const roundResultsObj = gameInput(input)
        console.dir(roundResultsObj)
        
        output(`Player Plays: ${roundResultsObj.playerChoice}`)
        await sleep(1)
        output(`Computer Plays: ${roundResultsObj.computerChoice}`)
        await sleep(1)
        output(`Winner: ${roundResultsObj.winner}`)
        await sleep(1)
        output(`Player: ${roundResultsObj.playerScore} --- Computer: ${roundResultsObj.computerScore}`) 
    } 
    catch (error) {
        if (error.message === "Invalid Input"){
            output("Invalid Input!!!!!!!!!!!!")
        }
        else{
            output(`ERROR: ${error}`)
        }
        return
    }
}



//is this best way to structure this function?
const outputDiv = document.querySelector("#output-area")
function output(text){
    outputDiv.textContent = text
}
function output_notinuse(text) {
    outputDiv.innerHTML += `<p> ${text} </p`
}



async function sleep(s) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, s*1000)
    })
}




function test(){
    console.log("Test Begins")
    const object1 = {
        user: "alyyx",
        nationality: "Space",
        fuu() {
            console.log("hello!!!")
        }
    }
    console.table(object1)
    console.dir(object1)
    console.log(object1)
}