const data = require("./data/exercises");

let results = data;

results = results.filter((object) => object.mechanic === "isolation");
results = results.filter((object) => object.category === "strength");
results = results.filter((object) => object.level === "expert");

console.log(results);
