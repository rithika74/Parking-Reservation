const express = require('express');
const router = express.Router();
const Slot = require('../models/slot');

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const updatedSlot = await Slot.findByIdAndUpdate(id, { ...updatedData, status: true }, { new: true });

        if (!updatedSlot) {
            return res.status(404).json({ error: 'Slot not found' });
        }

        res.json(updatedSlot);
    } catch (error) {
        console.error('Error updating slot:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
