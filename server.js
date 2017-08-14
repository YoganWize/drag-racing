// dependencies
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let firebase = require('firebase');

// var config = {
//     apiKey: "AIzaSyB0VL8UdhznLbJ63ShVfTcY5OugEtCoc_Y",
//     authDomain: "testalex-76fa5.firebaseapp.com",
//     databaseURL: "https://testalex-76fa5.firebaseio.com",
//     projectId: "testalex-76fa5",
//     storageBucket: "testalex-76fa5.appspot.com",
//     messagingSenderId: "319695167569"
// };
// firebase.initializeApp(config);
//
// // Reference
// var key = ref.key;
// var rootRef = ref.root;
// var parentRef = ref.parent;
//
// // Query
// var queryRef = query.ref;
//
// // DataSnapshot
// ref.on("value", function(snapshot) {
//     var dataRef = snapshot.ref;
//     var dataKey = snapshot.key;
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('frontend'));

var mongoose = require('mongoose');

mongoose.connect('mongodb://interuser:t54t62a@ds121622.mlab.com:21622/intersogdb');
let User = require('./schemas/userSchema');

app.get('/signUp', (req, res)=> {
    res.sendFile(__dirname + '/frontend/signUp.html');
});

app.post('/signup', (req, res)=> {
    User.find({}, (err, users)=> {
        console.log(users);
    });
    let user = new User({email: req.body.email, password: req.body.password});
    user.save(err=> console.log(err));
    res.redirect('/');
});

app.listen(8081);