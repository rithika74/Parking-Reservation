const express = require('express')
const router = express.Router()
const Parking = require('../models/parking')

router.post('/', async (req, res) => {
    const { area, space, userId } = req.body;
    let newparking = new Parking({
        area: area,
        space: space,
        userId: userId
    });
    let response = await newparking.save();
    console.log(response);
    res.json(response);
})

module.exports = router