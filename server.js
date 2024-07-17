const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {jwtAuthmiddleWare,generateToken} = require('./jwt');
require('dotenv').config();
const db = require('./db')
app.use(bodyParser.json());

const productRoutes = require('./routes/productRoutes')
app.use('/product', jwtAuthmiddleWare ,productRoutes);

const stockRoutes = require('./routes/stockRoutes')
app.use('/stock',jwtAuthmiddleWare, stockRoutes);

const orderRoutes = require('./routes/orderRoutes')
app.use('/order',jwtAuthmiddleWare, orderRoutes);

const userRoutes = require('./routes/userRoutes')
app.use('/user', userRoutes);

const port = process.env.Port || 30001;

app.listen(port, () => {
    console.log('server is up');
})

