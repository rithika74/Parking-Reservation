const express = require('express')
const router = express.Router()
const Slot = require('../models/slot')

router.get('/:id', async (req, res) => {
    const id=req.params.id;
    let response = await Slot.findById(id);
    console.log(response);
    res.json(response);
})

module.exports = router

