//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1 (Observable)

const {Observable} = require("rxjs");

function filterNumbersPromise(numbers){
    return new Promise((resolve,reject) => {
        if(numbers.length>0){
            resolve(Array.from(new Set(numbers)));
        }else{
            reject('!!!Empty Array!!!');
        }
    });
};

Array.prototype.removeDuplicates = function(){
    return new Observable(observer => {
        setTimeout(()=>{
            observer.next(filterNumbersPromise(this))
        },1000);
    })
};

console.log('--> START');
console.log('Input:')
console.log([4,1,5,7,2,3,1,4,6,5,2]);
let subscription = [4,1,5,7,2,3,1,4,6,5,2].removeDuplicates();
subscription.subscribe(result => {
    console.log('Output:')
    console.log(result)});

