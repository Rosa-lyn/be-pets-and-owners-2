const express = require("express");
const apiRouter = require("./routes/api.router");

const app = express();

app.use("/api", apiRouter);

module.exports = app;
//address already in use :::9090

// get a single pet using their id
// /api/pets/:petId
