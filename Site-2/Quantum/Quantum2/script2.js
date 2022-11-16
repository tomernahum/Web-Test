async function splitUniverseANUlocalstorage() {
    // check if list is already in local storage and it is not ran out of
    // if its not there, fetch it
    // if it is there, read from it, delete read data ig
    // return promise

    {
        //get list of universes and add to localstorage:
                //fetch from anu
                //convert to universe
                //save to a 
            
            //read from it
    }

}


function numberToUniverses(random_number, maximum_number, num_universes) {
    /* 
    x = max multiple of num_universes that is < maximum_input_number
    
    for i in range (maximum_number, 0, -1):
        if i % num_universes == 0:
        return i

    */

    const real_max_number = (function f(maximum_number, num_universes) {
        for (let i = maximum_number; i > 0; i--) {
            if (i % num_universes == 0){
                return i
            }
        }
    })(maximum_number, num_universes)
}

