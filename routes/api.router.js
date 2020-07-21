const express = require("express");
const apiRouter = express.Router();

const ownersRouter = require("./owners.router");

const petsRouter = require("./pets.router");

apiRouter.use("/owners", ownersRouter);
apiRouter.use("/pets", petsRouter);

module.exports = apiRouter;
