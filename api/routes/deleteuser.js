const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    let response = await User.findByIdAndDelete(id);
    console.log(response);
    res.json(response);
})

module.exports = router

