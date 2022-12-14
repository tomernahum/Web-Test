"use strict"

let div = document.querySelector("#output") //could make these more of a module
function output(text){
    div.innerText = text;
}


let activeEventFunctions = []
let inputBox = document.querySelector("#textBox")
function addInputEvent(func){
    const functionToRun = () => {
        output(func(inputBox.value))
    }

    inputBox.addEventListener("input", functionToRun)
    activeEventFunctions.push(functionToRun)
    functionToRun()
}
function clearInputEvents(){
    for (const activeFunc of activeEventFunctions) {
        inputBox.removeEventListener("input", activeFunc)
    }

    
    /* Old way //stack overflow says this is the best way...  but it does clear any text saved.
    const clone = inputBox.cloneNode(true)
    inputBox.parentNode.replaceChild(clone, inputBox)
    inputBox = clone
    */
}

//should I make this section an object/class? Edit: I did
//class/module/iife idk   idk whats the best way. some people online say classes are evil, they probably use modules though maybe? idk. I will learn in time
const dropdownConstructor = function(dropdownDomElement) {
    const getId = (function setupGetId(){
        let id = 0
        function getId(){
            id++
            return (id - 1).toString()
        }
        return getId
    })()
    
    //
    const functionIds = {
        "-1": console.log,  //example
    }

    dropdownDomElement.addEventListener("change", onDropdownChange)
    function onDropdownChange(e) {
        updateBasedOnDropdownSelection()

        sessionStorage.setItem("lastSelectionId", dropdownDomElement.value) //todo (not really though): make this support multiple selections if you want to have multiple dropdowns so its like a class
    }
    function updateBasedOnDropdownSelection(){
        const id = dropdownDomElement.value
        const selectedFunction = functionIds[id]
        clearInputEvents()
        addInputEvent(selectedFunction)
    }

    function registerFunctionOption(displayText, func){
        const id = getId()

        functionIds[id] = func
    
        //add to dropdown in DOM
        const option = document.createElement("option")
        option.value = id
        option.textContent = displayText
        dropdownDomElement.appendChild(option)
        
        //If its the same function the user had before they reloaded page then select it (id is not random)
        if (id == sessionStorage.getItem("lastSelectionId")) {
            option.selected = true;
        }
        
        //proccess the function once without text being changed
        updateBasedOnDropdownSelection()
        

        console.log(`registered function option: ${id} ${displayText} `)
        
    }

    
    return {
        functionIds: functionIds, //maybe should keep private?
        dropdownDomElement,       //^
        registerFunctionOption, 

        updateBasedOnDropdownSelection
    }
}
const dropdown = dropdownConstructor(document.querySelector("#selectFunctionDropdown"))
//dropdown.registerFunctionOption("echo", (i)=>i)


//alt bundling. doesnt work cause I dont understand this or objects and i need to go to bed
/*
const dropdownConstructor = function dropdownConstructor(dropdownDomElement){
    const getId = (function setupGetId(){
        let id = 0
        function getId(){
            id++
            return id - 1
        }
        return getId
    })()
    
    return {
        dropdownDomElement : dropdownDomElement,   
        functionIds: {},                      //could move out of return and make a variable to privatize it

        registerFunctionOption: (displayText, func) => {
            const id = getId()
        
            this.functionIds[id] = func

            console.log({id, func})
        
            //add to dropdown in DOM
            const option = document.createElement("option")
            option.value = id
            option.textContent = displayText
            this.dropdownDomElement.appendChild(option)
            onDropdownChange()
        },
    }
}
const dropdownn = dropdownConstructor(document.querySelector("#selectFunctionDropdown"))
output("hellooooo")
dropdownn.registerFunctionOption("echo", output)
*/




const registerFunctionOption = dropdown.registerFunctionOption
const temp = dropdown.updateBasedOnDropdownSelection
export {registerFunctionOption, output   ,temp}



