const express = require('express');
const catRouter = require('./catRouter');
const ownerRouter = require('./ownerRouter');

const rootRouter = express.Router();

rootRouter.use('/cats', catRouter);
rootRouter.use('/owners', ownerRouter);

module.exports = rootRouter;