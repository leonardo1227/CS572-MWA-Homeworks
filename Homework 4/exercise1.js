//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 4


const http = require('http');
const {fork} = require('child_process');
const path = require('path');
const url = require('url');
const {Subject} = require('rxjs');

const server = http.createServer();
const subject = new Subject();

server.on('request', (request,response)=>{
    let urlRequest = url.parse(request.url,true);
    if(urlRequest.query.url!=undefined){
        subject.next({request:request,
            response:response,
            fileName:urlRequest.query.url,
            filePath:path.join(__dirname,urlRequest.query.url),
            childProcess:fork(path.join(__dirname,'fileReader.js'))});
    }else{
        response.end(`Parameter 'url' need to be informed!`);
    }
});

subject.subscribe((data)=>{
    data.childProcess.send(data.filePath);
    
    data.childProcess.on('message', content =>{
        if(content.errno===undefined){
            data.response.end(content);
        }else{
            data.response.end(`File ${data.fileName} wasn't find!`);
        }
        data.childProcess.kill();
    });
});

server.listen(1000,()=>{console.log('Server started and it is listening to requests at port 1000')});

