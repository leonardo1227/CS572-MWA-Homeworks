//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 4
const os = require('os');
const {Subject} = require('rxjs');

const memoryObserver = new Subject();
const processorObserver = new Subject();
const systemObserver = new Subject();

function checkSystem(){
    systemObserver.next('Cheking your system...');
    let systemSupported=true;

    if(os.totalmem()<4294967296){
        memoryObserver.next('This app needs at least 4GB of RAM');
        systemSupported=false;
    }
    if(os.cpus().length<2){
        processorObserver.next('Processor is not supported');
        systemSupported=false;
    }
    if(systemSupported){
        systemObserver.next('checked successfully.');
    }
}

systemObserver.subscribe(info =>{
    console.log(info);
});

memoryObserver.subscribe(info =>{
    console.log(info);
});

processorObserver.subscribe(info =>{
    console.log(info);
});

checkSystem();