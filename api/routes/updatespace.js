const express = require('express');
const router = express.Router();
const Parking = require('../models/parking');

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const updated = await Parking.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updated) {
            return res.status(404).json({ error: 'Data not found' });
        }

        res.json(updated);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
