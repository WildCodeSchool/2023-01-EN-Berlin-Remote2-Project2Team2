import React, { useEffect, useState } from "react";
import '../App.css';

function DropdownDifficulty() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/filter")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  //   const apiArray = Object.keys(results).map((key) => {
  //     return { [key]: results[key] };
  //   });
  console.log(results);
  
  return (
    <div>
      <div className="select-wrapper">
      
      <select>
        <option value="" disabled selected>Select your level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>
    </div>
    </div>
    
  );
  
}





export default DropdownDifficulty;
