function App() {
    
    let Age = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    let userObj = {
        name : "Raja kumar",
        email : "raja@abc.com",
        state : "Delhi"
    };
    let userArray = ['ram','shyam','siya','radhe'];
    let imgpath = "https://cdn.mos.cms.futurecdn.net/truJRnpVqJWCE3EaEjvaTk-650-80.jpg.webp";
    let altImgPath = "Nothing";

    
    function sum(a,b) { return a+b; }
    function hello() { return "Namaskaar"; }

    return (
        <div>
            <h1>Age : {Age} , {Age>=18?"Eligible to vote":"Minor"}</h1>
            <h1>{hello()}</h1>
            <h1>sum : {sum(2,4)}</h1>
            <h2>{userObj.name} who live is {userObj.state} have mail id {userObj.email}</h2>
            <h2>Jai {userArray[2]}-{userArray[0]}<br/>Jai {userArray[3]}-{userArray[1]}</h2>
            <img src={imgpath} alt={altImgPath} />
        </div>
    );
}

export default App;