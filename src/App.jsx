import User from "./user";

function App(){
    let myName = "Raja kumar "
    return(
        <div>
            <h1>App Component</h1>
            <User data = {myName}/>
        </div>
    )
}

export default App;