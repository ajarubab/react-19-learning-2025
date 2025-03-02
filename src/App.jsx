import User from "./user";
function App(){
  return(
    <div>
      <h1>App Component</h1>
      <h2>The Result of 10 + 15 is : {sum()}</h2>
      <Fruit />
    </div>
  );
}

function Color(){
  return(
    <div>
      <h1>Color Component</h1>
      <User/>
    </div>
  );
}

function Fruit(){
  return(
    <div>
      <h1>Fruit Component</h1>
      <Color></Color>
    </div>
  );
}

function sum(){
  return 10+15;
}

export default App;