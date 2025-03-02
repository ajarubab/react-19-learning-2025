import User from "./user";
function App(){
  return(
    <div>
      <h1>App Component</h1>
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

export default App;