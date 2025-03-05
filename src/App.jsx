import React,{useState} from "react";
function App(){
    function abhivadan(){
        return("Namaste");
    }
    function greet(){
        alert("Namaste");
    }
    function add(m,n){
        return m+n;
    }
    let sky=()=>{
        console.log("sky has no limits.");
    }
    let color=()=>{
        return "Red";
    }
    let loc = (state)=>{
        alert(state);
    }
    let multiply = (a,b)=>{
        return a*b;
    }

    let [country, setMyCountry] = useState("");

    return(
        <div>
            <h1>{abhivadan()}</h1>
            <button onClick={greet}>Click me</button>
            <h1>Add : {add(12,13)}</h1>
            <button onClick={sky}>Quote</button>
            <h1>color : {color()}</h1>
            <button onClick={()=>loc("Delhi")}>Location</button>
            <h1>multiply : {multiply(10,15)}</h1>

            <h1>I live in : {country}</h1>
            <button onClick={()=>setMyCountry("India")}>Country</button>
        </div>
        
    );
}

export default App;