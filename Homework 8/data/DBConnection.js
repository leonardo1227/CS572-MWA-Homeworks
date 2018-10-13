//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 8

const {MongoClient} = require('mongodb');
const {Subject} = require('rxjs');
require('dotenv').config();

let Connection;
const dataRetriver = new Subject();
const dataInserter = new Subject();

module.exports =  {dataRetriver:dataRetriver,
                    dataInserter:dataInserter};

MongoClient.connect(process.env.DB_URL, {useNewUrlParser:true},(err,client)=>{
    if(err) throw new err;
    Connection = client.db(process.env.DB_NAME);
    console.log(`[DB    ] - [Connected] -> Database ${process.env.DB_NAME}`);
    prepareDB();
});

const prepareDB = (()=>{
    Connection.collection('locations').find().count((e,count)=>{
        if(count==0){
            let fs = require('fs');
            fs.readFile(process.env.DB_FILE_INITIAL_INSERT,(err,data)=>{
                if(err) throw err;
                Connection.collection('locations').insertMany(JSON.parse(data),(err,result)=>{
                    if(err) throw err;
                    console.log('[DB    ] - [Inserted ] -> Data Inserted');
                });
            });
        }
    });

    Connection.collection('locations').createIndex({location:'2d'},(err,result)=>{
        console.log('[DB    ] - [Created  ] -> Index Created');
    });
}); 

dataRetriver.subscribe(data =>{
    let query = {};

    if(data.request.params.id){
        query = {_id:parseInt(data.request.params.id)}
    }else if(data.nearestPoints){
        query = {location:{'$near':[parseFloat(process.env.MUM_LONG),parseFloat(process.env.MUM_LAT)]}};
        data.limit=3;
    }
    
    if(data.limit){
        Connection.collection('locations').find(query).limit(data.limit).toArray((err,result)=>{
            if(err){
                data.data={error:err}
            }else{
                data.data=result;
            }
            data.responseWriter.next(data);
        });
    }else{
        Connection.collection('locations').find(query).toArray((err,result)=>{
            if(err){
                data.data={error:err}
            }else{
                data.data=result;
            }
            data.responseWriter.next(data);
        });
    }
});


dataInserter.subscribe(data =>{
    Connection.collection('locations').insertMany(data.request.body,(err,result)=>{
        if(err){
            data.data={error:err};
        }else{
            data.data=result
        } 
        data.responseWriter.next(data);
    });
});

