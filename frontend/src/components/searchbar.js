import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
API_URL = "https://exercises-api-qkfb.onrender.com/";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    searchExercises();
  }, []);

  const searchExercises = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();

    setExercises(data);
  };

  return (
    <div>
      <div className="search">
        <input
          placeholder="Search for exercises"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchExercises()}
        />
      </div>
      {exercises.length > 0 ? (
        <div className="container">
          {exercises.map((exercise) => (
            <span key={exercise.id}>{exercise.name}</span>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No exercises found</h2>
        </div>
      )}
    </div>
  );
}

export default SearchBar;