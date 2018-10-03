//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1

function filterNumbers(numbers){
    return numbers.filter((number,position,array) => array.indexOf(number)==position);
};

Array.prototype.removeDuplicates = async function(){
    try{
        let numbers = await filterNumbers(this);
        return numbers;
    }catch(error){
        return error;
    }
};

[4,1,5,7,2,3,1,4,6,5,2].removeDuplicates()
                .then(result => console.log(result));

