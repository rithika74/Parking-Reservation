const express = require('express')
const router = express.Router()
const Slot = require('../models/slot')

router.get('/', async (req, res) => {
    let response = await Slot.find();
    console.log(response);
    res.json(response);
})

module.exports = router