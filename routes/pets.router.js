const express = require("express");
const petsRouter = express.Router();
const { getPetById } = require("../controllers/pets");

petsRouter.get("/:petId", getPetById);

module.exports = petsRouter;
