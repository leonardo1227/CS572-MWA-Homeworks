//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 4

const fs = require('fs');

process.on('message', filePath =>{
    readFile(filePath);
});

const readFile = ( (filePath) =>{
    fs.readFile(filePath, (err, data)=>{
        if(err===null){
            fileContent = data.toString();
            process.send(fileContent);
        }else{
            process.send(err);
        }
    });
});