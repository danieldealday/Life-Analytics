var express = require('express');

var mongodb = require('mongo');
var mongoose = require('mongoose');
// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
var path = require('path');
// var bcrypt = require('bcrypt');
// var passport = require('passport');
var app = express();
// var userController = require('./../src/userController');

// var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');
// var bcrypt = require('bcryptjs');
// var passport = require('passport');



app.use(express.static(path.join(__dirname, './../client/')));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, './../client/index.html'));
});



// app.get('/signup', userController.createUser, usercontroller.verifyUser, function (req, res) {
//   res.redirect('/questionnaire');
// });

// app.post('/login', usercontroller.verifyUser, function (req, res) {
//   res.redirect('/dashboard');
// });

// app.get('/dashboard', function (req, res) {
//   res.sendFile(path.join(__dirname, './../dashboard.html'));
// });

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

