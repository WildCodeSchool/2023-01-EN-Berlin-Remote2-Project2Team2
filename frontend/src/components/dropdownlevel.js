import { useEffect, useState } from "react";

function DropdownLevel() {
  const [results, setResults] = useState([]);
  const [filterLevel, setFilterLevel] = useState(false);

  useEffect(() => {
    fetch("https://exercises-api-qkfb.onrender.com/")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  console.log(results);

  return (
    <div>
      <select className="SelectDropdown">
        {/* <option value="" disabled selected>
          Select your level
        </option>
        <option>All</option> */}
        {/* <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option> */}
        {results.map((result) => (
          <option>{result.level}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownLevel;
