import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState("Time");

  const setTimeNow = () => {
    setTime(now);
  };
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTimeNow}>Get Time</button>
    </div>
  );
}

export default App;
