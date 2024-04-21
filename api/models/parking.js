const mongoose = require('mongoose')
const user = require('./user')

const parkingScheme = new mongoose.Schema({
    area: {
        type: String
    },
    space: {
        type: String
    },
    cost: {
        type: String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: user
    }
})

let Parking = mongoose.model('Parking', parkingScheme, 'parking')
module.exports = Parking

