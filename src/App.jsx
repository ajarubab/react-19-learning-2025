import User from "./user";

function App(){
    return(
        <div>
            <h1>App component</h1>
            <User myName="Raja"/>
            <User />
        </div>
    )
}
export default App;