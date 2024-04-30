const express = require('express');
const router = express.Router();
const Slot = require('../models/slot');

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const response = await Slot.find({ userId }).populate('userId');
    res.json(response);
  } catch (error) {
    console.error('Error fetching slots:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;