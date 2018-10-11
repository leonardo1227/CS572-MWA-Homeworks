//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 8

const express = require('express');
const {MongoClient} = require('mongodb');
const {Subject} = require('rxjs');
require('dotenv').config();

const app = express();
app.set('port',process.env.SERVER_PORT);
app.use(express.json());

const dbDataRetriver = new Subject();
const dbDataInserter = new Subject();
const responseWriter = new Subject();

let dbClientConnection;
MongoClient.connect(process.env.DB_URL, {useNewUrlParser:true},(err,client)=>{
    if(err) throw new err;
    dbClientConnection = client.db(process.env.DB_NAME);
    prepareDB();
});

const prepareDB = (()=>{
    dbClientConnection.collection('locations').find().count((e,count)=>{
        if(count==0){
            let fs = require('fs');
            fs.readFile('initialDataDB.json',(err,data)=>{
                if(err) throw err;
                dbClientConnection.collection('locations').insertMany(JSON.parse(data),(err,result)=>{
                    if(err) throw err;
                    console.log('Initial data Inserted successfully');
                });
            });
        }
    });

    dbClientConnection.collection('locations').createIndex({location:'2d'},(err,result)=>{
        console.log('Index created...');
    });
}); 

app.get('/locations',(request,response)=>{
    dbDataRetriver.next({request:request,
                        response:response});    
});

app.get('/locations/:id',(request,response)=>{
    dbDataRetriver.next({request:request,
                        response:response});    
});

app.get('/nearestpoints',(request,response)=>{
    let data = {request:request,
                response:response};
    data.nearestPoints=true;
    dbDataRetriver.next(data);
});

app.post('/locations',(request,response)=>{
    let data = {request:request,
                response:response};
    if(request.body){
        dbDataInserter.next(data);
    }else{
        data.data = {error:'Input body is empty'};
        responseWriter.next(data);
    }
});

dbDataRetriver.subscribe(data =>{
    let query = {};

    if(data.request.params.id){
        query = {_id:parseInt(data.request.params.id)}
    }else if(data.nearestPoints){
        query = {location:{'$near':[parseFloat(process.env.MUM_LONG),parseFloat(process.env.MUM_LAT)]}};
        data.limit=3;
    }
    
    if(data.limit){
        dbClientConnection.collection('locations').find(query).limit(data.limit).toArray((err,result)=>{
            if(err){
                data.data={error:err}
            }else{
                data.data=result;
            }
            responseWriter.next(data);
        });
    }else{
        dbClientConnection.collection('locations').find(query).toArray((err,result)=>{
            if(err){
                data.data={error:err}
            }else{
                data.data=result;
            }
            responseWriter.next(data);
        });
    }
});

dbDataInserter.subscribe(data =>{
    
    dbClientConnection.collection('locations').insertMany(data.request.body,(err,result)=>{
        if(err){
            data.data={error:err};
        }else{
            data.data=result
        } 
        responseWriter.next(data);
    });
});

responseWriter.subscribe(data=>{
    data.response.json(data.data);
});


app.listen(app.get('port'),()=>console.log(`Server started and it is listening to port ${app.get('port')}`));