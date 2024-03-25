const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

const saltrounds = 10;

router.post('/', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(409).json({ emailExists: true, message: 'Email already registered' });
        }

        const hashPassword = await bcrypt.hash(req.body.password, saltrounds)
        console.log(hashPassword);
        let newuser = new User({
            ...req.body,
            password: hashPassword
        })
        console.log(newuser);
        let response = await newuser.save();
        console.log(response);
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;
