const mongoose = require('mongoose')
const parking = require('./parking')
const user = require('./user')

const slotScheme = new mongoose.Schema({
    area: {
        type: String
    },
    slotno: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    hours: {
        type: String
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: user
    },
    parking: {
        type: mongoose.Types.ObjectId,
        ref: parking
    }
})

let Slot = mongoose.model('Slot', slotScheme, 'slot')
module.exports = Slot

