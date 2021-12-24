import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <h2>Mobile Operating system</h2>

      {["Andriod", "Black Barry", "i-Phone", "Windows"].map((e) => (
        <li> {e}</li>
      ))}

      <h2>Mobile Manufacturers</h2>
      {["Samsung", "HTC", "Micromax", "Apple"].map((e) => (
        <li> {e}</li>
      ))}
    </div>
  );
}

export default App;
