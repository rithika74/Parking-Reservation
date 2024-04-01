const express = require('express')
const router = express.Router()
const Parking = require('../models/parking')

router.put('/:id', async (req, res) => {
    let id=req.params.id;
    let response=await Parking.findByIdAndUpdate(id,req.body)
})

module.exports = router