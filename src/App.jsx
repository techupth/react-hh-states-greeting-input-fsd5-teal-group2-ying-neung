import { useState } from "react";
import "./App.css";

function App() {
  const [greetingInput, setDisplayInput] = useState("");
  const [messageDisplay, setDisplay] = useState("Greeting!");
  return (
    <div className="App">
      <div className="greeting-container">{messageDisplay}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => {
            setDisplayInput(e.target.value);
          }}
          value={greetingInput}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setDisplay(greetingInput);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
