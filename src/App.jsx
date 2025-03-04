import Home, { Color, Fruit, result } from "./Home";

function App() {
    const Name = "Raja kumar Prasad";
    let x = 12;
    let y = 25;
    return (
        <div>
            <h1>App Component</h1>
            <Home />
            <Color />
            <Fruit />
            <h1>Sum : {result}</h1>
            <h2>{12 + 23 + 34 + 45}</h2>
            <h1>Name is : {Name}</h1>
            <h1>{x} * {y} = {x * y}</h1>
            <button onClick={()=>alert("Hello")}>Click me</button>
        </div>

    );
}

export default App;
