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
        type: Boolean
    }
})

let User = mongoose.model('User', userScheme, 'user')
module.exports = User



// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     dob: {
//         type: Date
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     gender: {
//         type: String,
//         enum: ['male', 'female', 'other']
//     },
//     phn: {
//         type: String,
//         trim: true
//     },
//     address: {
//         type: String
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     usertype: {
//         type: String,
//         required: true,
//         enum: ['user', 'provider']
//     },
//     status: {
//         type: String,
//         default: 'pending',
//         enum: ['pending', 'approved', 'rejected']
//     }
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
