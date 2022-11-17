"use strict";

function hello() {
    alert("hello!")
    const the_thing_that_is_up = prompt("what's up?")
    
    const confirmed = confirm("are you sure \"" + the_thing_that_is_up + "\" is whats up?")
    if (confirmed) {
        if (the_thing_that_is_up === "goodbye"){
            alert("oh okay bye...")
            return
        }
        
        alert("ok good")
        alert("I wonder what's up now?")
        hello()
    }
    else {
        alert("oh okay, ill let you pick again")
        hello()
    }


    
}
const hello_button_on_click = () => hello();


//im sure theres a better way ill get to it. also should this be done in the html or the js?
for (const i of document.querySelectorAll(".hello-button")) {
    i.onclick = hello_button_on_click
}


function test(){
    x = () => {}
}
