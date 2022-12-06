import {registerFunctionOption} from "./framework.js"


registerFunctionOption("echo", (input)=>{
    return input
})
registerFunctionOption("scream", (input) => {
    return input.toUpperCase()
})