const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/parking')
    .then(() => console.log('Connected!'));

const db = mongoose.connection;

app.use(express.json());
app.use(cors());
const saltrounds = 10;

app.post('/register', async (req, res) => {
    try {

        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(409).json({ emailExists: true, message: 'Email already registered' });
        }

        const hashPassword = await bcrypt.hash(req.body.password, saltrounds)
        console.log(hashPassword);
        let newuser = new User({
            ...req.body,
            password: hashPassword
        })
        console.log(newuser);
        let response = await newuser.save();
        console.log(response);
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password, usertype } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Inavlid email or password' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Inavlid email or password' });
        }
        const token = jwt.sign({ id: user.id, email: user.email, usertype: user.usertype  }, 'abc')
        res.json({ user, token })
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ message: 'Internal server error' })
    }

})

// const verifyToken = (req, res, next) => {
//     let token = req.headers['authorization'];
//     console.log(token);
//     if (token) {
//         token = token.split(' ')[1];
//         console.log(token);

//         jwt.verify(token, 'abc', (err, decoded) => {
//             if (err) {
//                 return res.status(401).json({ message: 'Unauthorized: Invalid token' });
//             }
//             req.decoded = decoded;
//             console.log(req.decoded, 'asd');
//             next();
//         });
//     } else {
//         return res.status(403).json({ message: 'Token is not provided' });
//     }
// };



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});