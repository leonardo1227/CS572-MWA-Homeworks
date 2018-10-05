//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 3
const events = require('events');

module.exports = class Gym extends events{
    
    constructor(){
        super();
        this.visit();
        this.messageToPrint();
    }
    visit(){
        setInterval(()=>{
            this.emit('go')
        },1000);
    }
    messageToPrint(){
        return 'Athlete is working out';
    }
};