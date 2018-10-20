const express = require('express');


const app = express();

const users = [];

app.set('port', 1000);
app.use(express.json());


app.get('/verifyemail/:email', (request, response) => {
    let email = request.params.email;
    if (users.find(user => user.email == email)) {
        response.json({ exists: 'true' });
    } else {
        response.json({ exists: 'false' });
    }
});



app.listen(app.get('port'), console.log(`Server is running at port ${app.get('port')}`));






