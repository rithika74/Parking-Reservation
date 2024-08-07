const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const providersRoute = require('./routes/providers');
const addareaRoute = require('./routes/addarea');
const allareaRoute = require('./routes/areas');
const viewareaRoute = require('./routes/viewarea');
const reserveRoute = require('./routes/reserve');
const areaRoute = require('./routes/reservedarea');
const addslotRoute = require('./routes/addslot');
const slotsRoute = require('./routes/slots');
const slotRoute=require('./routes/slot');
const userstatusRoute = require('./routes/userstatus');
const providedareaRoute = require('./routes/providerareas');
const reservationsRoute = require('./routes/reservations');
const providerreserveRoute = require('./routes/providerreserve');
const userreservationRoute = require('./routes/userreservation');
const updatereservationRoute = require('./routes/updatereservation');
const deletereservationRoute = require('./routes/deletereservation');
const deleteuserRoute = require('./routes/deleteuser');
const deleteparkingRoute = require('./routes/deleteparking');
// const checkreservationRoute = require('./routes/checkreservation');
const updatedspaceRoute = require('./routes/updatespace');
const areaviewRoute=require('./routes/area');

//(mongodb://127.0.0.1:27017/parking)

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected!'));

const db = mongoose.connection;

app.use(express.json());
app.use(cors());
const saltrounds = 10;

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/users', usersRoute);
app.use('/providers', providersRoute);
app.use('/addarea', addareaRoute);
app.use('/allarea', allareaRoute);
app.use('/viewarea', viewareaRoute);
app.use('/reserve', reserveRoute);
app.use('/reservedarea', areaRoute);
app.use('/addslot', addslotRoute);
app.use('/slots', slotsRoute);
app.use('/slot',slotRoute);
app.use('/userstatus', userstatusRoute);
app.use('/providedarea', providedareaRoute);
app.use('/reservations', reservationsRoute);
app.use('/providerreserve', providerreserveRoute);
app.use('/userreservation', userreservationRoute);
app.use('/updatereservation', updatereservationRoute);
app.use('/deletereservation', deletereservationRoute);
app.use('/deleteuser', deleteuserRoute);
app.use('/deleteparking', deleteparkingRoute);
// app.use('/checkreservation', checkreservationRoute);
app.use('/updatespace', updatedspaceRoute);
app.use('/areaview',areaviewRoute);

app.listen(port, () => {
    console.log('Server Connected');
});


