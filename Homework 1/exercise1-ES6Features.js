//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1 (ES6 Features)

Array.prototype.removeDuplicates = function(){
    return Array.from(new Set(this));
};

console.log('--> START');
console.log([4,1,5,7,2,3,1,4,6,5,2]);
console.log([4,1,5,7,2,3,1,4,6,5,2].removeDuplicates());
console.log('--> FINISH');