//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 7
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const {Subject} = require('rxjs');

const app = express();
app.set('port',1000);

const dbInfo = {url:'mongodb://127.0.0.1:27017/',
                name:'myDB',
                configurations:{useNewUrlParser:true}};
const cryptoInfo = {algorithm:'aes256',
                    password:'asaadsaad'};

const decipher = crypto.createDecipher(cryptoInfo.algorithm,cryptoInfo.password);

const dbDataRetriver = new Subject();
const decrypter = new Subject();
const responseWriter = new Subject();

app.get('/secret',(request,response,next)=>{
    dbDataRetriver.next({request:request,
                    response:response});
});

dbDataRetriver.subscribe(data =>{
    mongoClient.connect(dbInfo.url, dbInfo.configurations, (err,client)=>{
        if(err) throw err;
        let dbconnection = client.db(dbInfo.name);
        dbconnection.collection('homework7').findOne({},{projection:{_id:0}},(err,doc)=>{
            if(err) throw err;
            data.message=doc.message;
            decrypter.next(data);
            client.close();
        });
    });
});

decrypter.subscribe(data =>{
    data.decryptedMessage = decipher.update(data.message,'hex','utf8');
    data.decryptedMessage += decipher.final('utf8');
    responseWriter.next(data);
});

responseWriter.subscribe(data =>{
    data.response.json({message:data.decryptedMessage});
});


app.listen(app.get('port'),()=>console.log(`Server started and is running to port ${app.get('port')}`));
