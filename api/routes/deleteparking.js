const express = require('express')
const router = express.Router()
const Parking = require('../models/parking')

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    let response = await Parking.findByIdAndDelete(id);
    console.log(response);
    res.json(response);
})

module.exports = router

