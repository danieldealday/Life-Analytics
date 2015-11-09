var express = require('express');
var mongodb = require('mongo');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
// var bcrypt = require('bcrypt');
// var passport = require('passport');
var app = express();
var userController = require('./../src/userController');

mongoose.connect('mongodb://localhost/life-analytics');
mongoose.connection.once('open', function () {
  console.log('Connected to life-analytics database');
});

app.use(express.static(path.join(__dirname, './client')));
// app.use(bodyParser());

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, './client'));
// });

// app.get('/signup', userController.createUser, usercontroller.verifyUser, function (req, res) {
//   res.redirect('/questionnaire');
// });

// app.post('/login', usercontroller.verifyUser, function (req, res) {
//   res.redirect('/dashboard');
// });

// app.get('/dashboard', function (req, res) {
//   res.sendFile(path.join(__dirname, './../dashboard.html'));
// });



app.listen(3000);
module.exports = app;
