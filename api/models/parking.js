const mongoose = require('mongoose')

const parkingScheme = new mongoose.Schema({
    area: {
        type: String
    },
    space: {
        type: String
    }
})

let Parking = mongoose.model('Parking', parkingScheme, 'parking')
module.exports = Parking

