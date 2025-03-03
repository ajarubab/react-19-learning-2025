function Home(){
    return(
        <div>
      <h1>Home Component</h1>
    </div>
  );
}
export default Home;

export function Color(){
  return(
    <div>
      <h1>Color Component</h1>
    </div>
  );
}

export function Fruit(){
  return(
    <div>
      <h1>Fruit Component</h1>
    </div>
  );
}

function sum(){
  return 20+15;
}

export const result = sum();
