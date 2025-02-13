import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Happy Valentine's day my love !</h1>
      <p>Count: {count}</p>
      <button
        className="custom-button"
        onClick={() => setCount(count + 1)}>
          Increment
      </button>
    </div>
  );
}

export default App;
