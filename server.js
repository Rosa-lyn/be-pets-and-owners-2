const express = require("express");
const {
  getAllOwners,
  getOwnerById
} = require("./controllers/owners");

const app = express();

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/api/owners", getAllOwners);

app.get("/api/owners/:ownerId", getOwnerById);

app.listen(9090, () => {
  console.log("app is listening on port 9090");
});

//address already in use :::9090