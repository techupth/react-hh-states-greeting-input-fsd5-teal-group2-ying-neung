import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [InputGreetingMessage, setInputGreeting] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>

        <input
          id="greeting-message"
          type="text"
          value={InputGreetingMessage}
          onChange={(event) => setInputGreeting(event.target.value)}
        />

        <button
          onClick={() => {
            setGreetingMessage(InputGreetingMessage);
          }}>
          Update Text
        </button>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingMessage("สวัสดี");
          }}>
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setGreetingMessage("Hi!");
          }}>
          Hi!
        </button>
        <button
          onClick={() => {
            setGreetingMessage("你好!");
          }}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
