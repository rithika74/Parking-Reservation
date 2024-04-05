const mongoose = require('mongoose')
const parking = require('./parking')

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
    parking: {
        type: mongoose.Types.ObjectId,
        ref: parking
    }
})

let Slot = mongoose.model('Slot', slotScheme, 'slot')
module.exports = Slot

