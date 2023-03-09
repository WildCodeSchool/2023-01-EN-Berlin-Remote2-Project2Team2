const express = require("express");
const app = express();
const data = require("./data/exercises.js");
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  err
    ? console.log("Server Error, try again")
    : console.log(`Server Run on port ${port}`);
});

// ---------------------------------

const api = (_, res) => {
  res.status(200).send(data);
};

app.get("/", api);
