import { useState } from "react";

function App(){
    const [val,setVal] = useState()
    return(
        <div style={{border:"5px solid Blue", textAlign:"center", width:"350px", padding:"20px"}}>
            <input type="text" placeholder="Enter your Name" value={val} 
                onChange={(event)=>setVal(event.target.value)} />
            <h1> : {val} : </h1>
            <button onClick={()=>setVal("")}>Clear</button>
        </div>
    )
}

export default App;