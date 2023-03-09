import React from "react";
import "./App.scss";
import ropes from "./assets/ropes.mp4";

function App() {
  return (
    <>
      <div className="App">
        <video src={ropes} autoPlay loop muted />
        <div className="Container">
          <div className="Animation">
            <h1>Animation</h1>
          </div>
          <div className="SearchAndSelect">
            <div className="Searchbar">
              <h2>Searchbar</h2>
            </div>
            <div className="Select">
              <h2>Select 1</h2>
            </div>
            <div className="Select">
              <h2>Select 2</h2>
            </div>
            <div className="Select">
              <h2>Select 3</h2>
            </div>
          </div>
        </div>
        <div className="Results">
          <h1>Results</h1>
        </div>
      </div>
    </>
  );
}

export default App;
