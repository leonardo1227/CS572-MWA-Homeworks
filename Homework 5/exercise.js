//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 5
const express = require('express');
const axios = require('axios');
const {Subject} = require('rxjs');

const app1 = express();
const app2 = express();
const app3 = express();
const subject = new Subject();

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

const startServer = (serverApp,number,description) =>{
    serverApp.listen(serverApp.get('port'), () => console.log(`The server ${number} is running ${serverApp.get('port')} (${description})`));
}

const writesResponse = (data => {
    if(data.fetchedData){
        data.response.json(data.fetchedData);
        data.response.end();
    }else{
        // data.response.
    }
});


//===================================================================================================================================================
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
//==================================================================================================================================================
//Server 2
initialServerConfiguration(app2,2000);

app2.get(urlUserRequests, (request,response) =>{
    subject.next({request:request,
        response:response});

});

const writesResponseObservable = (data) =>{
    axios.get(urlToFetchData)
        .then(externalResponse =>{
            writesResponse({request:data.request,
                response:data.response,
                fetchedData:externalResponse.data});
        })
        .catch(err =>{
            writesResponse({request:request,
                response:response,
                error:err});
        });
};

subject.subscribe(writesResponseObservable);

//===================================================================================================================================================
//Server 3
initialServerConfiguration(app3,3000);

app3.get(urlUserRequests, (request,response) =>{
    writesResponseAsyncAwait()
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

const writesResponseAsyncAwait = async function () {
    try{
        return promiseExternalDataRequest(urlToFetchData);
    }catch(error){
        return error; 
    }
}

//=================================================================================================================================================
startServer(app1,1,'Promise');
startServer(app2,2,'Reactive Programmin (Observables)');
startServer(app3,3,'Async Await');