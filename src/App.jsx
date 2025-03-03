import Home, {Color, Fruit, result} from "./Home";

function App(){
    return (
        <div>
            <h1>App Component</h1>
            <Home />
            <Color/>
            <Fruit />
            <h1>Sum : {result}</h1>
        </div>
    );
}

export default App;
