const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String
    },
    dob: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String
    },
    phn: {
        type: Number
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
    usertype: {
        type: String
    },
    status: {
        type: String
    }
})

let User = mongoose.model('User', userScheme, 'user')
module.exports = User