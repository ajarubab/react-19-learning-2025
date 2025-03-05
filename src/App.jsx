import { useState } from "react";

function App() {
    let [country, setMyCountry] = useState("");

    const [fruit, setFruit] = useState("Apple");
    let updateFruit = () => {
        setFruit("Mango");
    }
    const [count, updateCount] = useState(0);

    const [profession , updateProfession] = useState(null);

    return (
        <div>

            <h1>I live in : {country}</h1>
            <button onClick={() => setMyCountry("India")}>Country</button>

            <h1>{fruit}</h1>
            <button onClick={updateFruit}>Change Fruit</button>

            <h1>Count : {count}</h1>
            <button onClick={() => updateCount(count + 1)}>increase count</button>
            <button onClick={() => updateCount(count - 1)}>decrease count</button>
            <br /><br />
            
            <h1>I am a { profession !==null && (profession ? "Student":"Developer")}</h1>
            <button onClick={()=>updateProfession(!profession)}>who am i</button>
        </div>

    );
}

export default App;