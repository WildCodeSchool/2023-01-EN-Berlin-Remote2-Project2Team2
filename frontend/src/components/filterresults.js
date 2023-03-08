import React from "react";
import '../App.css';


function FilterResults(){
    if (option.value === "Beginner") {
      return <div>Beginner</div>;
    }
    else if (option.value === "Intermediate") {
      return <div>Intermediate</div>;
    }
    else if (option.value === "Expert") {
      return <div>Expert</div>;
    }
  };

  export default FilterResults;