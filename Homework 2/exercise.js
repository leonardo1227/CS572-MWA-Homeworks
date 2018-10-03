//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 2


function processNumbers(x,numbers){
    return numbers.filter(n=>n%2==x);
}

Array.prototype.even = function(){
    console.log(processNumbers(0,this));
}

Array.prototype.odd = function(){
    console.log(processNumbers(1,this));
}

console.log('start');
setImmediate(()=>{[1,2,3,4,5,6,7,8].even();});
setImmediate(()=>{[1,2,3,4,5,6,7,8].odd();});
console.log('end');

