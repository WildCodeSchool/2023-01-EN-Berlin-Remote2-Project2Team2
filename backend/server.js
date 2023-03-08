const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data/exercises");

app.use(cors());

// name: "Yoke Walk",
//     force: null,
//     level: "intermediate",
//     mechanic: "compound",
//     equipment: "other",
//     primaryMuscles:

function filterByLevel(array, level) {
  return array.filter((object) => object.level === level);
}

function filterByCategory(array, category) {
  return array.filter((object) => object.category === category);
}

function filterByMechanic(array, mechanic) {
  return array.filter((object) => object.mechanic === mechanic);
}

app.get("/filter", function (req, res) {
  const { level, category, mechanic } = req.query;

  // start with the full set
  let results = data;

  // filter by level if specified
  if (level) results = filterByLevel(results, level);

  // filter by category if specified
  if (category) results = filterByCategory(results, category);

  // filter by mechanic if specified
  if (mechanic) results = filterByMechanic(results, mechanic);

  // return set that matches all filters
  res.send("heya");
});

app.listen(2500);
