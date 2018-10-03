//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1

Array.prototype.removeDuplicates = function(){
    let numbers = this;
    return new Promise((resolve) => {
        resolve(numbers.filter((number,position,array) => array.indexOf(number)==position));
    });
};

[4,1,5,7,2,3,1,4,6,5,2].removeDuplicates()
            .then(result => console.log(result));

