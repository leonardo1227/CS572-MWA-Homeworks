//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 1 (Promise)

Array.prototype.removeDuplicates = function(){
    let numbers = this;
    return new Promise((resolve,reject) => {
        if(numbers.length>0){
            resolve(Array.from(new Set(numbers)));
        }else{
            reject('!!!Empty Array!!!');
        }
    });
};

console.log('--> START');

[4,1,5,7,2,3,1,4,6,5,2].removeDuplicates()
    .then(result => {
        console.log('-First Example Started!');
        console.log('Input(First Example):')
        console.log([4,1,5,7,2,3,1,4,6,5,2]);
        return result;})
    .then(result=> {
        console.log('Output(First Example):')
        console.log(result);})
    .then(() => console.log('-First Example Done!'))
    .catch(error=> {
        console.log('Catch (First Example)');
        console.error(error)});

[].removeDuplicates()
    .then(result => {
        console.log('-Second Example Started!');
        console.log('Input(Second Example):')
        console.log([]);
        return result;})
   .then(result=> {
        console.log('Output(Second Example):')
        console.log(result);})
   .then(() => console.log('-Second Example Done!'))
   .catch(error=> {
        console.log('Catch (Second Example)');
        console.error(error)});

[1,2,2,3,3,3].removeDuplicates()
        .then(result => {
            console.log('-Third Example Started!');
            console.log('Input(Third Example):')
            console.log([1,2,2,3,3,3]);
            return result;})
       .then(result=> {
            console.log('Output(Third Example):')
            console.log(result);})
       .then(() => console.log('-Third Example Done!'))
       .catch(error=> {
            console.log('Catch (Third Example)');
            console.error(error)});