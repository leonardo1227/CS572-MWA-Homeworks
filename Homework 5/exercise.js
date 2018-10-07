//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 5
const express = require('express');
const axios = require('axios');
const app1 = express();
const app2 = express();
const app3 = express();

const urlToFetchData = 'http://jsonplaceholder.typicode.com/users/';
const urlUserRequests = '/users';


const promiseExternalDataRequest = (urlDataRequest) =>{
    return new Promise((resolve,reject)=>{
        if(urlDataRequest){
            resolve(axios.get(urlDataRequest));
        }else{
            reject('There is not URL for fetching data');
        }
    });
} 

const initialServerConfiguration = (serverApp,port)=>{
    serverApp.set('port',port);
    serverApp.disable('x-powered-by');
    serverApp.enable('trust proxy');
    serverApp.enable('case sensitive rounting');
    serverApp.enable('strict routing');
}

const writesResponse = (data => {
    if(data.fetchedData){
        data.response.json(data.fetchedData);
        data.response.end();
    }else{
        // data.response.
    }
});



//Server 1
initialServerConfiguration(app1,1000);

app1.get(urlUserRequests, (request,response) =>{
      promiseExternalDataRequest(urlToFetchData)
        .then(data =>{
            writesResponse({resquest:request,
                response:response,
                fetchedData:data.data});
        })
        .catch(err =>{
            writesResponse({resquest:request,
                response:response,
                error:err});
        });
});

//Server 2
initialServerConfiguration(app2,2000);


//Server 3
initialServerConfiguration(app3,3000);



app1.listen(app1.get('port'), () => console.log(`The server 1 is running ${app1.get('port')} (Promise)`));
app2.listen(app2.get('port'), () => console.log(`The server 1 is running ${app2.get('port')} (Reactive Programming(Observables))`));
app2.listen(app3.get('port'), () => console.log(`The server 1 is running ${app3.get('port')} (Asyn Await)`));