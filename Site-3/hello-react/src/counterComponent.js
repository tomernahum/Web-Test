import { useState } from "react";
function CounterComponent() {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount (count+1)
    }

    return (
        <button 
            onClick={handleClick}
            style={{width:"200px", height:"50px"}}
        >
           Times Pressed: {count}
        </button>
    )
}

export default CounterComponent