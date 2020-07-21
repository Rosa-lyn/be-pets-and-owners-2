const express = require("express");
const ownersRouter = express.Router();
const {
  getPetsByOwnerId
} = require("../controllers/pets");
const {
  getAllOwners,
  getOwnerById,
  patchOwner
} = require("../controllers/owners");

ownersRouter.get("/", getAllOwners);

ownersRouter.get("/:ownerId", getOwnerById);

ownersRouter.get("/:ownerId/pets", getPetsByOwnerId);

ownersRouter.patch('/:ownerId', patchOwner);

module.exports = ownersRouter;