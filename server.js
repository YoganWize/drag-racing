// dependencies
let express = require('express');
let app = express();

app.use(express.static('frontend'));

app.get('/signUp', (req, res)=> {
    res.sendFile(__dirname + '/frontend/signUp.html');
});

app.listen(8080);