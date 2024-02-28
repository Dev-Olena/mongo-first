const mongoose = require ('mongoose');

const catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    color: {
        type: String
    },
    favouriteFood: {
        type: [String]
    },
    favouriteGame: {
        type: String
    }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;