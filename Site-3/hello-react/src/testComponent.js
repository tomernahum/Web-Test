const TestComponent = () => {
    
    const option = "a";
    return (
        <h2>Selected: {
            (function(option){
                if(option==="a"){      
                    return "Option A!"
                }
                else{
                    return "Option B!"
                }
            })(option)
        }</h2>
    );
}
 
export default TestComponent;