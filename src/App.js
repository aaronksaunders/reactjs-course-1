import React from "react";
import Welcome from "./components/Welcome";
import "./App.css";

function App() {
  const handleNameSubmitted = _nameData => {
    alert(_nameData.first + " " + _nameData.last);
  };

  return (
    <div>
      <Welcome onWelcomeSubmit={handleNameSubmitted} />
    </div>
  );
}

export default App;
