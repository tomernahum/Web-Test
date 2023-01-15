


export default function HelloComponent({greetee})
{


    return (
        <div>
            <h1>
                Hello {greetee}!
            </h1>

            <div className="Test1">
                {(() => {
                    if (greetee === "badguy"){
                        return <h2>Passed in badguy!</h2>
                    }
                    return <h2>Hello again {greetee}</h2>
                })()}
            </div>

            <div className="Test2">
                {(function(){
                    if (greetee === "badguy"){
                        return <h2>Passed in badguy!</h2>
                    }
                    return <h2>Hello again {greetee}</h2>
                })()}
            </div>



            <div className="Test3">
                {greetee==="badguy" ? (
                    <h2>
                        Passed in badguy!
                    </h2>
                ) : (
                    <h2>
                        Hello again {greetee}
                    </h2>
                )}
            </div>

            <div className="Test4">
                {greetee==="badguy" ? 
                (
                    <h2>
                        Passed in badguy!
                    </h2>
                ) 
                : 
                (
                    <h2>
                        Hello again {greetee}
                    </h2>
                )
                }
            </div>

            <div>
                ------------------
            </div>
        </div>
    );
}
