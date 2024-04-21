const express = require('express');
const router = express.Router();
const Slot = require('../models/slot');

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('idddddd', id);
    const updatedData = req.body;

    try {
        const updatedSlot = await Slot.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedSlot) {
            return res.status(404).json({ error: 'Data not found' });
        }

        res.json(updatedSlot);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
