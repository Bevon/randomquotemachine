import React from "react";
import Quotes from "./components/quotes";

function App() {
  return (
    <div className="container-fluid bg-primary">
      <h1 className="text-white">Random Quote Machine</h1>
      <Quotes />
    </div>
    
  );
}

export default App;
