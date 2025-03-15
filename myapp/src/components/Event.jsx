import "../components/Event.css";

function MyApp(){

    function Handle(){
        alert("I am Clicked!")
    }

    return(
        <div>
            <button onClick={Handle}>Click Me</button>
        </div>
    )
}

export default MyApp