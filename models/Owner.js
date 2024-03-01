const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^[^0-9]+$/.test(v)
        }
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^[^0-9]+$/.test(v)
        }
    },
    birthday: {
        type: Date
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        city: {
            type:  String
        },
        street: {
            type: String
        },
        house: {
            type: Number
        },
        appartmentType: {
            type: String,
            enum: ['house', 'appartment', 'room']
        }
    }
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;