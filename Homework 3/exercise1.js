//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 3
const dns = require('dns');
const util = require('util');
const {Subject} = require('rxjs');


let mumAddress = 'www.mum.edu';
const subject = new Subject();

//1.
const resolveAddress = (address) =>{
    dns.resolve4(address, (err,ipAddresses) =>{
        console.log('1.ADDRESS: '+address);
        ipAddresses.forEach((ip)=>{
            console.log('- '+ip);
        });
    });
};




//2.
const resolveAddressPromise = util.promisify(dns.resolve4);


//3.
const resolveAddressAsyncAwait = async function(address){
    try{
        return await resolveAddressPromise(address);
    }catch(error){
        return error;
    }
};


//4
// function resolverAddressObservable(address){
//     setTimeout(()=>{
        
//     },1000);
// }



//---------------------------------------------------------------------------------
console.log('Start');

resolveAddress(mumAddress);

resolveAddressPromise(mumAddress)
    .then((data)=>{
        console.log('2.ADDRESS: '+mumAddress);
        console.log('- '+data);
    })
    .catch((err) =>{
        console.error(err);
    });

resolveAddressAsyncAwait(mumAddress)
    .then((data)=>{
        console.log('3.ADDRESS: '+mumAddress);
        console.log('- '+data);
    })
    .catch(err => {
        console.error(err);
    });

console.log('Finish');