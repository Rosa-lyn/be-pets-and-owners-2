const express = require("express");
const apiRouter = require("./routes/api.router")

const {
  getAllOwners,
  getOwnerById
} = require("./controllers/owners");

const {
  getPetsByOwnerId
} = require("./controllers/pets");

const app = express();

app.use('/api', apiRouter)

// app.get("/", (req, res) => {
//   res.send("hello!");
// });

// app.get("/api/owners", getAllOwners);

// app.get("/api/owners/:ownerId", getOwnerById);

//app.get("/api/owners/:ownerId/pets", getPetsByOwnerId);

module.exports = app;
//address already in use :::9090