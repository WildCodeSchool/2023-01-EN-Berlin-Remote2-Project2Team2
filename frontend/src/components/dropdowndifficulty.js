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
        {results.map((result) => (
          <option value="Beginner">{result.level}</option>
        ))}
      </select>
      <select>
        {results.map((result) => (
          <option value="Intermediate">{result.level}</option>
        ))}
      </select>
      <select>
        {results.map((result) => (
          <option value="Expert">{result.level}</option>
        ))}
      </select>
    </div>
    </div>
    
  );
  
}





export default DropdownDifficulty;
