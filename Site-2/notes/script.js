


function addNoteDisplay(list, text) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(text))
    list.appendChild(li)
}

test.bad(ifew)

//Get Stored Notes


//Add-Note Button
function onAddNoteButtonPress() {
    const list = document.getElementById("notes-list")
    const text = prompt("Enter Text")
    addNoteDisplay(list, text)
}

const button = document.getElementsByClassName("add-note-button")[0]
button.addEventListener("click", onAddNoteButtonPress)

