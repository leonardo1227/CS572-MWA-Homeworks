//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 3
const gym = require('./exercise3');


const athlete = new gym();

athlete.on('go', () =>{
    console.log(athlete.messageToPrint());
});