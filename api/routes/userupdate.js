const express = require('express')
const router = express.Router();
const User = require('../models/user');

router.put('/:id', async (req, res) => {
    let id=req.params.id;
    
})

module.exports = router