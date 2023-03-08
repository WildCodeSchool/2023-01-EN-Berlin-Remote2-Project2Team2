import React, { useEffect, useState } from "react";

function DropdownDifficulty() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2500/filter")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  //   const apiArray = Object.keys(results).map((key) => {
  //     return { [key]: results[key] };
  //   });

  console.log(results);

  return (
    <div>
      <select>
        {results.map((result) => (
          <option>{result.level}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownDifficulty;
