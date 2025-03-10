import { useState } from "react";
import User from "./user";

function App() {
    let [country, setMyCountry] = useState("");

    const [fruit, setFruit] = useState("Apple");
    let updateFruit = () => {
        setFruit("Mango");
    }
    const [count, updateCount] = useState(0);
    const [profession, updateProfession] = useState(null);

    const [userContent, showUserPageContent] = useState(false);

    return (
        <div>

            <h1>I live in : {country}</h1>
            <button onClick={() => setMyCountry("India")}>Country</button>

            <h1>{fruit}</h1>
            <button onClick={updateFruit}>Correct National Fruit</button>

            <h1>Count : {count}</h1>
            <button onClick={() => updateCount(count + 1)}>increase count</button>
            <button onClick={() => updateCount(count - 1)}>decrease count</button>
            <br />

            <h1>I am a {profession !== null && (profession ? "Student" : "Developer")}</h1>
            <button onClick={() => updateProfession(!profession)}>who am i</button>

            <br /><br />
            <button onClick={() => showUserPageContent(!userContent)}>
                {userContent ? "Hide User Component Content" : "Show User Component Content"}</button>
            {userContent ? <User /> : null}

        </div>

    );
}

export default App;