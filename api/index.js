const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const addareaRoute = require('./routes/addarea');
const allareaRoute = require('./routes/areas');
const viewareaRoute = require('./routes/viewarea');
const reserveRoute = require('./routes/reserve');
const areaRoute = require('./routes/reservedarea');
const addslotRoute = require('./routes/addslot');
const slotsRoute = require('./routes/slots');
const userstatusRoute = require('./routes/userstatus');
const providedareaRoute = require('./routes/providerareas');
const reservationsRoute = require('./routes/reservations');
const providerreserveRoute=require('./routes/providerreserve');

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
app.use('/allarea', allareaRoute);
app.use('/viewarea', viewareaRoute);
app.use('/reserve', reserveRoute);
app.use('/reservedarea', areaRoute);
app.use('/addslot', addslotRoute);
app.use('/slots', slotsRoute);
app.use('/userstatus', userstatusRoute);
app.use('/providedarea', providedareaRoute);
app.use('/reservations', reservationsRoute);
app.use('/providerreserve',providerreserveRoute);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


