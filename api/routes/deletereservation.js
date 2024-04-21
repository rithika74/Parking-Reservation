const express = require('express')
const router = express.Router()
const Slot = require('../models/slot')

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    let response = await Slot.findByIdAndDelete(id);
    console.log(response);
    res.json(response);
})

module.exports = router

