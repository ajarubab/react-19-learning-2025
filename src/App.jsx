import User from "./user";

function App(){
    return(
        <div>
            <User color="Blue">
                <h1>Jai Hind</h1>
            </User>
            <User>
                <h1 align="right">Jai Bharat</h1>
            </User>
            <User>
                <h2 style={{color:"Red", textAlign:"center"}}>Login</h2>
            </User>
        </div>
    )
}
export default App;