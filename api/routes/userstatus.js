const express = require('express')
const router = express.Router();
const User = require('../models/user');

router.patch('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { status } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error('Error updating user status:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router