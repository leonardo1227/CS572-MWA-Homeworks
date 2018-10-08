//Student: Leonardo Samuel Tolosa Contreras
//Student ID: 986527
//Course: CS572-Modern Web Applications (MUM)
//Assignment 6
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();

app.set('port',1000);

app.use(logger('common'));
app.use(cors());
app.use(express.json());

let grades = [];

// grades.push({id:1,
//     name:'Leonardo',
//     course:'CS572',
//     grade:'A'});
// grades.push({id:2,
//         name:'Leonardo',
//         course:'CS472',
//         grade:'A'});


app.get('/grades',(request,response,next)=>{
    response.json(grades);
});

app.post('/grades',(request,response,next)=>{
    if(grades.filter(grade=>grade.id==request.body.id).length==0){
        let grade = request.body;
        grades.push(grade);
        response.json(grade);
    }else{
        response.json({error:'Already there is a grade registed with the informed ID'});
    }
});

app.put('/grades',(request,response,next)=>{
    let grade = request.body;
    if(grades.filter(g=>g.id==grade.id).length>0){
        grades = grades.filter(g=>g.id!=grade.id);
        grades.push(grade);
        response.json(grade);
    }else{
        response.json({error:'It does not exist a register with the informed ID'});
    }
});

app.delete('/grades/:id',(request,response,next)=>{
    let id = request.params.id;
    let jsonResponse = grades.filter(grade => grade.id==id);
    if(jsonResponse.length!=0){
        grades = grades.filter(grade => grade.id!=id);
        response.json(jsonResponse);
    }else{
        response.json({error:'It does not exist a register with the informed ID'});
    }
});

app.listen(app.get('port'), () => console.log(`Server started and running to port ${app.get('port')}`));