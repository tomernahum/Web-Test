
//
const form = document.querySelector("#input-form")

form.addEventListener("submit", onFormSubmitted )

function onFormSubmitted(event){
    event.preventDefault()
    const form = event.currentTarget
    const inputBox = form.querySelector("input#x")
    
    output(inputBox.value) 
    inputBox.value = "";   //Question: this works, but if I store InputX.value as one variable, changing it with = just changes the variable, not the thing in the DOM that it is pointing at, so what if I wanted a pointer so to speak in one variable?
     
    
}


//is this best way to structure this function?
const outputDiv = document.querySelector("#output-area")
function output(text){
    outputDiv.textContent = text
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