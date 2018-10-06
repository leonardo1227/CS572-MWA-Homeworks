//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 4
const os = require('os');

function checkSystem(){
    console.log('Cheking your system...');

    let systemSupported=true;

    if(os.totalmem()<4294967296){
        console.log('This app needs at least 4GB of RAM');
        systemSupported=false;
    }
    if(os.cpus().length<2){
        console.log('Processor is not supported');
        systemSupported=false;
    }
    if(systemSupported){
        console.log('checked successfully.')
    }
}
checkSystem();