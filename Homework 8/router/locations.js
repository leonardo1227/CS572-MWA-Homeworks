//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 8

const express = require('express');
const DBConnection = require('../data/DBConnection');
const router = express.Router();
const {Subject} = require('rxjs')

const responseWriter = new Subject();

router.get("/locations",(request,response) =>{
    DBConnection.dataRetriver.next({request:request,
        response:response,
        responseWriter:responseWriter});
});

router.get('/locations/:id',(request,response)=>{
    DBConnection.dataRetriver.next({request:request,
                        response:response,
                        responseWriter:responseWriter});   
});

router.get('/nearestpoints',(request,response)=>{
    let data = {request:request,
                response:response,
                responseWriter:responseWriter};
    data.nearestPoints=true;
    DBConnection.dataRetriver.next(data);
});

router.post('/locations',(request,response)=>{
    let data = {request:request,
                response:response,
                responseWriter:responseWriter};
    if(request.body){
        DBConnection.dataInserter.next(data);
    }else{
        data.data = {error:'Input body is empty'};
        data.responseWriter.next(data);
    }
});


responseWriter.subscribe(data=>{
    data.response.json(data.data);
});

module.exports = router;