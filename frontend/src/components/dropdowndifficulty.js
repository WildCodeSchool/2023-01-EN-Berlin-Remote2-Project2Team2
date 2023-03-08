import React, { useEffect, useState } from "react";

function DropdownDifficulty() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/coffee/random_coffee")
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
        {/* {apiArray.map((result) => (
          <option>{result.origin}</option>
        ))} */}
        {<option>{results.origin}</option>}
      </select>
    </div>
  );
}

export default DropdownDifficulty;
