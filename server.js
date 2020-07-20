const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(9090, () => {
  console.log("app is listening on port 9090");
});

//address already in use :::9090 