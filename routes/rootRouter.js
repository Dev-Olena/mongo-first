const express = require('express');
const catRouter = require('./catRouter');

const rootRouter = express.Router();

rootRouter.use('/cats', catRouter);

module.exports = rootRouter;