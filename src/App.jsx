import User from "./user";

function App(){
    let fruitNames = ["Apple","Banana","Cherry","Date","ElderBerry","Fig","Grapes"]
    return(
        <div>
            <h1>App Component</h1>
            <User fruits = {fruitNames}/>
        </div>
    )
}

export default App;