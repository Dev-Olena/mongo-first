const mongoose = require ('mongoose');
const Cat = require ('./Cat');
const Owner = require('./Owner');
const db = require('../configs/mConfig.json');

const CONFIG = db[process.env.NODE_ENV || 'development'];

const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`;

mongoose.connect(url).catch((error) => {
    console.log('connection failed');
    process.exit(1);
});

module.exports = {
    Cat,
    Owner
};