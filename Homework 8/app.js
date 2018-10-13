//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 8

const express = require('express');
const router = require('./router/locations');
require('dotenv').config();

const app = express();
app.set('port',process.env.SERVER_PORT);
app.use(express.json());
app.use(router);


app.listen(app.get('port'),()=>console.log(`[Server] - [Started  ] -> Running to port ${app.get('port')}`));