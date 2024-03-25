const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const addareaRoute=require('./routes/addarea');
const viewareaRoute=require('./routes/areas');

mongoose.connect('mongodb://127.0.0.1:27017/parking')
    .then(() => console.log('Connected!'));

const db = mongoose.connection;

app.use(express.json());
app.use(cors());
const saltrounds = 10;

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/addarea', addareaRoute);
app.use('/viewarea', viewareaRoute);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
