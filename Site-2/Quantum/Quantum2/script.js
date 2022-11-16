


const body = document.querySelector("body")
const themeButton = document.querySelector("#theme-toggle")

const mainDiv = document.querySelector("#main-div")
const outputArea = mainDiv.querySelector(".output-area")
const mainButton = mainDiv.querySelector(".main-button")
const loadingImg = mainDiv.querySelector(".loading-image")

window.onload = () => {
//     const mainDiv = document.querySelector("#main-div")
//     const outputArea = mainDiv.querySelector(".output-area")
//     const mainButton = mainDiv.querySelector(".main-button")
    mainButton.addEventListener("click", onButtonClick)
    themeButton.addEventListener("click", onThemeButtonClick)
}

//
function output(s)  {
    //alert(s)
    //outputArea.innerText = s

    //outputArea.innerText += s + "\n"

    const element = document.createElement("li")
    element.innerText = s
    outputArea.appendChild(element)

}


async function onButtonClick(e) {
    //const universeNumber = splitUniverseFake()
    
    // splitUniverseANUOldApi()
    // .then( universeNumber => {
    //     console.log("Universe Number: " + universeNumber)
    //     output(`You are in Universe ${universeNumber}`)
    // })
    // .catch( error => {
    //     console.error(error)
    //     output(`error splitting the universe: ${error}`)
    // })

    toggleLoading(true)
    
    try {
        const universeNumber = await splitUniverseANUOldApi()
        output(`You are in Universe ${universeNumber}`)
    }
    catch (error) {
        output(`error splitting the universe: ${error}`)
    }
    
    
    toggleLoading(false)
    
    
}

function toggleLoading(on) {
    if (on) {
        loadingImg.style.display = "block"
    }
    else {
        loadingImg.style.display = "none"
    }
}
//

//
function onThemeButtonClick(){
    toggleTheme()
}

function toggleTheme(){
    if (body.classList.contains("light")) {
        body.classList.replace('light', 'dark')
    }
    else {
        body.classList.replace('dark', 'light')
    }
}
//


// So poky arounds can see that its not finished
function logToDoList(){
    fetch("./todo.txt")
    .then((response)=> response.text())
    .then((response) => {
        console.info(response)
    })
    .catch((error) => {})//do nothing
}
logToDoList()
//



function splitUniverseFake() {
    return Math.floor((Math.random() * 2)) + 1;
}

async function splitUniverseANUOldApi() {  //its called old cause there gonna deprecate the api and start charging for it
    const fetchAnuJsonPromise = new Promise((resolve, reject) => {
        fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
        .then((response) => {
            if (!(response.ok)) {
                reject("problem connecting to ANU quantum server")
            } 

            return response.json()  // response.json() returns a nother promise

        })
        .then((jsonData) => {
            resolve(jsonData)
        })
        .catch( error => {
            reject(error)
        })
        
    })

    const getUniverseNumberPromise = new Promise((resolve, reject) => {
        fetchAnuJsonPromise.then( data => {
            const number = data.data[0]
            const universeNumber = (number % 2) + 1
            resolve(universeNumber)
            //reject("testting")
        })
        .catch( error => {  //wip
            reject(error)
        })
    })

    return getUniverseNumberPromise
    
    
    
    
}



