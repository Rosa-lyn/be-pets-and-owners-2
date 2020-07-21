const express = require("express");
const apiRouter = require("./routes/api.router");

const app = express();
app.use(express.json())

app.use("/api", apiRouter);

module.exports = app;
//address already in use :::9090

// /api/owners/:ownerId
//updating owners name and age