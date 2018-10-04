//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 2

async function processNumbers(x,numbers){
    try{
        return await numbers.filter(n=>n%2==x);
    }catch(error){
        return error;
    }
}

function executesProcessNumbersAsync(x,numbers){
    processNumbers(x,numbers)    
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

Array.prototype.even = function(){
    executesProcessNumbersAsync(0,this);
}

Array.prototype.odd = function(){
    executesProcessNumbersAsync(1,this);
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');

