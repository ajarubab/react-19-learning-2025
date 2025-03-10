import User from "./user";

function App(){
    let detalils = {Name : "Raja kumar ", Country : "India"};
    return(
        <div>
            <h1>App Component</h1>
            <User data = {detalils}/>
        </div>
    )
}

export default App;