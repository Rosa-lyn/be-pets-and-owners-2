const express = require('express');
const ownersRouter = express.Router();
const {
  getPetsByOwnerId
} = require('../controllers/pets')


ownersRouter.get('/:ownerId/pets', getPetsByOwnerId);


module.exports = ownersRouter;