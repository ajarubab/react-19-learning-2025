function App() {
    function callFun() { alert("Function called"); }
    return (
        <div>
            <h1>Raja Kumar prasad</h1>
            <img class="photo" src="https://www.euroschoolindia.com/wp-content/uploads/2023/09/how-sun-powers-our-planet.jpg" alt="#" />
            <ul>
                <li>A for Apple</li>
                <li>A for Aata</li>
                <li>A for Aam</li>
            </ul>
            {/* <button onClick={()=>alert("function called")}>Click me</button> */}
            <button onClick={callFun}>Click me</button>
        </div>
    );
}

export default App;