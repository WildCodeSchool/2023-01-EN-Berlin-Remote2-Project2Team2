import React from "react";
import "./App.scss";
import ropes from "./assets/ropes.mp4";
import levelsvg from "./assets/barbellcolor-03.svg";
import equipmentsvg from "./assets/equipment-01.svg";
import bodypartysvg from "./assets/body-01.svg";
// import DropdownLevel from "./components/dropdownlevel.js";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://exercises-api-qkfb.onrender.com/")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  console.log(results);

  // filterByLevel = ()

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
              {/* <h2>Select Your Level</h2> */}
              <select
                className="SelectDropdown"
                id="SelectLevel"
                // onChange={filterByLevel}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
              <img src={levelsvg} alt="" />
            </div>
            <div className="Select">
              <h2>Select Your Equipment</h2>
              <img src={equipmentsvg} alt="" />
            </div>
            <div className="Select">
              <h2>Select Your Body Part</h2>
              <img src={bodypartysvg} alt="" />
            </div>
          </div>
        </div>
        <div className="Results">
          <h1>Results</h1>
          <h2>Levels{results[9].level}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
