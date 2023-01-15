
//passes in props object. Usually use {} object destructoring in "real world"
const HelloComponentAlt = (props) => {

    const greetee = props.greetee
    console.log(props.testt)

    return (
        <h1>
          Hello {greetee}! {} {null} {undefined} {props.testt}
        </h1>
    );
}
 
export default HelloComponentAlt;