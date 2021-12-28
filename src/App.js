import React from "react"
import './App.css';


function App() {
  let [counter , setCounter ] = React.useState(0);

  const add = (value) => {
   setCounter(counter + value); 
    
  }
  const double = (value) => {
      setCounter(counter * value)
}
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>

      <button onClick={() => add(1)}>add</button>
      <button onClick={() => add(-1)}>reduce</button>
      <button onClick={() => double(2)}>double</button>
    </div>
  );
}




export default App;
