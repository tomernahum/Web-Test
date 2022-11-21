
//TABS CODE
window.addEventListener("load", ()=>{
    updateTabsDisplay()
})

tabContents = document.querySelectorAll(".tab-content")
function updateTabsDisplay(){
    // get the # thing from the url
    
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    });

    const currentTabName = window.location.href.split("#").at(-1).slice(0)
    const activeTabContent = document.querySelector(`.${currentTabName}`)
    activeTabContent.classList.add('active')
    
    console.log(activeTabContent)
}

/*
tabSelectors = document.querySelectorAll(".tab-selectors li")
console.log(tabSelectors)
tabSelectors.forEach(tabSelector => {
     tabSelector.addEventListener("click", () =>{
         setTimeout(updateTabsDisplay, 5)
     })
});
*/
window.addEventListener("hashchange", updateTabsDisplay)




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