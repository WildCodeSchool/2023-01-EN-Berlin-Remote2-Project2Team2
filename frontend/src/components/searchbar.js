import React, { useEffect, useState } from "react";

function SearchByName (){

const searchExercise = async (name) => {
    const response = await fetch('http://localhost:2500/filter');
    const data = await response.json();

    console.log(data.Search);
}
    
useEffect(() => {
    searchExercise('Name');
    }, []);

    return (
        <div className="search">
            <input
            placeholder="Search for exercises"/>
        </div>
    );
};

// {
//     name: "Cable Chest Press",
//     force: "push",
//     level: "beginner",
//     mechanic: "compound",
//     equipment: "cable",
//     primaryMuscles: ["chest"],
//     secondaryMuscles: ["shoulders", "triceps"],
//     instructions: [
//       "Adjust the weight to an appropriate amount and be seated, grasping the handles. Your upper arms should be about 45 degrees to the body, with your head and chest up. The elbows should be bent to about 90 degrees. This will be your starting position.",
//       "Begin by extending through the elbow, pressing the handles together straight in front of you. Keep your shoulder blades retracted as you execute the movement.",
//       "After pausing at full extension, return to th starting position, keeping tension on the cables.",
//       "You can also execute this movement with your back off the pad, at an incline or decline, or alternate hands.",
//     ],
//     category: "strength"},
