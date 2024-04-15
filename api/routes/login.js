const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const { email, password, usertype, status } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Inavlid email or password' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Inavlid email or password' });
        }
        const token = jwt.sign({ id: user.id, email: user.email, usertype: user.usertype }, 'abc')
        res.json({ user, token })
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ message: 'Internal server error' })
    }
});

module.exports = router;
