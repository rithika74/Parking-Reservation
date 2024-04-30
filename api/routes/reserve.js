const express = require('express');
const router = express.Router();
const Slot = require('../models/slot');

router.post('/', async (req, res) => {
    try {
        const { area, date, time, hours, totalcost, userId, providerId, areaId, expireTime } = req.body;
        const newSlot = new Slot({
            area: area,
            date: date,
            time: time,
            hours: hours,
            totalcost: totalcost,
            userId: userId,
            providerId: providerId,
            areaId: areaId,
            expireTime: expireTime
        });
        const response = await newSlot.save();
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error('Error creating new slot:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;


