const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;



const app = express();

const users = [];

users.push({ firstName: 'Leonardo', lastName: 'Contreras', email: 'leonardo1227@hotmail.com', password: '$2b$10$f6maHp2xsXNfSQw.5YRks.fUe7u/45ejHMcIRhvt/7m1CHx9t7iya' });

app.set('port', 1000);
app.use(express.json());
app.use(cors());


app.post('/login', (request, response) => {
    let user = users.find(u => u.email == request.body.email);
    if (user) {

        let result = bcrypt.compareSync(request.body.password, user.password);
        if (result) {
            let token = jwt.sign(user, 'private_key');
            response.json({
                token: token
            });
            return
        }
        //     bcrypt.compare(request.body.password, user.password, (err, res) => {
        //         if (err) {
        //             response.send(500);
        //         } else {
        //             if (res) {

        //             } {
        //                 response.json({ msg: 'invalid user' });
        //             }
        //         }
        //     });
        // } else {
    }
    response.json({ msg: 'invalid user' });
    // }
});

app.get('/protected', ensureToken, (request, response) => {
    jwt.verify(request.token, 'private_key', (err, data) => {
        if (err) {
            response.send(403);
        } else {
            response.json({ text: 'protected', data: data });
        }
    });
});


function ensureToken(request, response, next) {
    let bearerHeader = request.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        let bearer = bearerHeader.split(" ");
        let bearerToken = bearer[1];
        request.token = bearerToken;
        next();
    } else {
        response.send(403);
    }

}



app.get('/verifyemail/:email', (request, response) => {
    let email = request.params.email;
    if (users.find(user => user.email == email)) {
        response.json({ exists: 'true' });
    } else {
        response.json({ exists: 'false' });
    }
});

app.get('/users', (request, response) => {
    if (request.query.email) {
        response.json(users.find(user => user.email == request.query.email));
    } else {
        response.json(users);
    }
})



app.listen(app.get('port'), console.log(`Server is running at port ${app.get('port')}`));






