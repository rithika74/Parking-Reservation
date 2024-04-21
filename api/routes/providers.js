const express = require('express')
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    let response = await User.find({ usertype: 'provider' })
    console.log(response);
    res.json(response)
})

module.exports = router