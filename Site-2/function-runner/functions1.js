// not@ts-check

import {registerFunctionOption, output} from "./framework.js"


registerFunctionOption("echo", (input)=>{
    // console.log(input)
    return input
})
registerFunctionOption("scream", (input) => {
    return input.toUpperCase()
})



registerFunctionOption("Advent Day Three P1", adventDayThreeP1)  //cant figure out how to use jsdoc with anonymous functions or else I'd do it like echo and scream functions (I want the string autocomplete)
/**
 * @param {String} input 
 * @return {String}
 */
function adventDayThreeP1 (input) {
    console.group("AdventD3")
    
    const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


    input = input.trim()
    const lines = input.split("\n")
    
    let priorities_sum = 0
    for (const line of lines) {
        const compartment_size = line.length /2
        const compartment_1 = line.substring(0, line.length / 2)
        const compartment_2 = line.substring(line.length / 2, line.length)

        //Find the "item type"(character) that appears in both strings 
        //I dont know efficient algorithms...
        const overlapping_character = (()=> {
            for (const i of compartment_1) {
                for (const j of compartment_2) {
                    if (i===j) {
                        return i
                    }
                }
            }
        })()

        //get priority
        const priority = PRIORITIES.indexOf(overlapping_character) + 1
        priorities_sum += priority
    }

    
    console.groupEnd()
    return priorities_sum
    
}

registerFunctionOption("Advent Day Three P2", adventDayThreeP2)  
/**
 * @param {String} input 
 * @return {String}
 */
function adventDayThreeP2 (input) {
    console.group("AdventD3P2")
    
    const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"


    input = input.trim()
    const lines = input.split("\n")
    const groups = (()=>{
        let output = []
        for (let i = 3; i <= lines.length; i+=3) {
            console.log(i)
            const x = lines.slice(i-3, i)
            output.push(x)
        } 
        return output
    })() //is this good way of doing it or should I just put the code underneath the variable. since this is JS then I would have to make it let instead of const, which makes me hesitent
    console.log(groups)
    
    let priorities_sum = 0
    for (const group of groups) {
        const [comp_1, comp_2, comp_3] = group
        console.log(comp_2)
        

        //Find the "item type"(character) that appears in both strings 
        //I dont know efficient algorithms...
        const overlapping_character = (()=> {
            for (const i of comp_1) {
                for (const j of comp_2) {
                    if (i===j) {
                        for (const k of comp_3) {
                            if(i===k){
                                return i
                            }
                        }
                    }
                    
                }
            }
        })()
        console.log(overlapping_character)

        //get priority
        const priority = PRIORITIES.indexOf(overlapping_character) + 1
        priorities_sum += priority
    }
    console.info(groups)

    
    console.groupEnd()
    return priorities_sum
    
}

registerFunctionOption("Advent Day Four P1", adventD4P1)  
/**
 * @param {String} input 
 * @return {String}
 */
function adventD4P1 (input) {
    console.group("AdventD4P")
    
    input = input.trim()
    const lines = input.split("\n")
    
    return lines[1]
}

registerFunctionOption("Advent Day 10 P1", adventD10P1)  
/**
 * @param {String} input 
 * @return {String}
 */
function adventD10P1 (input) {
    console.group("AdventD4P")
    
    input = input.trim()
    const lines = input.split("\n")
    
    return lines[1]
}