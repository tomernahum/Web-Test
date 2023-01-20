import { useState } from "react";
function CounterComponent() {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount (count+1)
    }

    return (
        <button 
            onClick={handleClick}
            // style=
        >
            Times Pressed: {count}
        </button>
    )
}

export default CounterComponent