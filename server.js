const express = require("express");
const apiRouter = require("./routes/api.router");

const app = express();
app.use(express.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({ msg: "owner not found" });
});

module.exports = app;

// /api/owners/:ownerId
//updating owners name and age

// get /api/owners/:ownerid
