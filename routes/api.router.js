const express = require('express');
const apiRouter = express.Router();

const ownersRouter = require('./owners.router');

apiRouter.use('/owners', ownersRouter);









module.exports = apiRouter;