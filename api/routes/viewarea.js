const express = require('express')
const router = express.Router();
const Parking = require('../models/parking')

// router.get('/:id', async (req, res) => {
//     let id = req.params.id;
//     console.log('kkkk', id);
//     let response = await Parking.findById(id)
//     console.log(response);
//     res.json(response);
// })

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log('kkkk', id);
        let response = await Parking.findById(id);
        if (!response) {
            return res.status(404).json({ message: 'Parking data not found' });
        }
        console.log(response);
        res.json(response);
    } catch (error) {
        console.error('Error fetching parking data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router