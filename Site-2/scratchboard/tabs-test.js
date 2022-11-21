// If you ever come back to this, look into location.hash might be more correct way to do some of this

//BACK BUTTON CODE
//BUG: works wrong if user manually clicks back. TODO
let backsNeeded = 1;
window.addEventListener("hashchange", ()=>{
    backsNeeded++
    console.log(backsNeeded)
})
function goBack(){
    console.log(0-backsNeeded)
    window.history.go(0-backsNeeded)
}
document.querySelector("#back-button").addEventListener("click", goBack)



//TABS CODE
window.addEventListener("load", updateTabsDisplay)
window.addEventListener("hashchange", updateTabsDisplay)

tabContents = document.querySelectorAll(".tab-content")  //should this be put in the function?
tabSelectors = document.querySelectorAll(".tab-selectors li")
function updateTabsDisplay(){

    //TODO: highlight current tab

    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    });
    tabSelectors.forEach(tabSelector => {
        tabSelector.classList.remove('active')
    })

    const currentTabName = window.location.href.split("#").at(-1).slice(0) // get the # thing from the url
    const activeTabContent = document.querySelector(`.${currentTabName}`) //this is how I did it for some reason
    const activeTabSelector = (() =>{
        for (const tabSelector of tabSelectors) {
            const tabName = tabSelector.querySelector("a").getAttribute("href").slice(1)
            if (tabName == currentTabName){
                return tabSelector;
            }
        }
    })() //good way of doing things??  //LOOKINTO

    activeTabContent.classList.add('active')
    activeTabSelector.classList.add('active')
    
    // console.log(activeTabSelector)
    // console.log(tabSelectors)
    //console.log(activeTabContent)
}

/*
tabSelectors = document.querySelectorAll(".tab-selectors li")
console.log(tabSelectors)
tabSelectors.forEach(tabSelector => {
     tabSelector.addEventListener("click", () =>{
         setTimeout(updateTabsDisplay, 5)
     })
});
*/ //nvmnd this haha




//READ MORE BUTTON
//I wonder how this could be extracted into something like what bootstrap is  (includes CSS too)   //COMEBACKTO
const readMoreButton = document.querySelector("#read-more-button")
readMoreButton.addEventListener('click', (e)=>{   //I tried to make it extendable / copypastable
    const readMoreButton = e.currentTarget
    const notesDiv = readMoreButton.parentElement
    
    if (notesDiv.classList.contains("not-reading-more")) {
        notesDiv.classList.remove("not-reading-more")
        notesDiv.classList.add("reading-more")
        
        readMoreButton.textContent = "Read Less"
    }
    else {
        notesDiv.classList.remove("reading-more")
        notesDiv.classList.add("not-reading-more")

        readMoreButton.textContent = "Read More"
    }

})


