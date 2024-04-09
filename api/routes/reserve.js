const express = require('express');
const router = express.Router();
const Slot = require('../models/slot');

router.post('/', async (req, res) => {
    try {
        const newSlot = new Slot(req.body);
        const response = await newSlot.save();
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error('Error creating new slot:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
