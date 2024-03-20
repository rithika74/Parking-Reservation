const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://127.0.0.1:27017/parking')
    .then(() => console.log('Connected!'));

const db = mongoose.connection;

app.use(express.json());
app.use(cors());




app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});