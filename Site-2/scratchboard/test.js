
import { getCustomString } from "./test2.js"

const button = document.querySelector("button")
const output_div = document.querySelector("div")

button.addEventListener('click', onButtonClick)

function onButtonClick(e) {
    //output_div.textContent = testFunction()
    console.log("hello")
    output_div.textContent = getCustomString()
}


function testFunction(){
    const w = 55
    
    const x = (function f(i) {
        return i + 5
    })(w)

    const y= ((i) => {
        return i + 5
    })(w)

    return x
}

// function testFunction2(){
//     const w = 55
    
//     const x = {
//         return 55
//     }
// }



function runFunction(func) {
    return func();
}