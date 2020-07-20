const express = require("express");
const { getAllOwners, getOwnerById } = require("./controllers/owners");

const { getPetsByOwnerId } = require("./controllers/pets");

const app = express();

app.get("/", (req, res) => {
  res.send("hello!");
});

app.get("/api/owners", getAllOwners);

app.get("/api/owners/:ownerId", getOwnerById);

app.get("/api/pets/:ownerId", getPetsByOwnerId);

app.listen(9090, () => {
  console.log("app is listening on port 9090");
});

//address already in use :::9090
