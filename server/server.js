var express = require('express');
var user = require('./User/userModel')
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var app = express();
var userModel = require('./User/userModel');
var path = require('path');
mongoose.connect('mongodb://localhost/userInfo');
mongoose.connection.once('open', function() {
	console.log('Connected with MongoDB ORM - mongodb-orm');
	//userController.postData();
});

// var userInfo = new Schema({
// 	username: { type: String, unique: true },
// 	firstName: { type: String unique: true },
// 	lastName: { type: String, unique: true },
// 	password: { type: String, unique: true },
// 	email: { type: String, unique: true }
// });

// app.get('/', function(req,res){
// 	res.sendStatus(200);
// });
app.use(express.static(path.join(__dirname, './../client/')));
// app.use(bodyParser());

app.post('/create', userController.createUser);

app.post('/login', function(req,res) {
	console.log('FIND USER WORKS');
});


// app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, './../client/index.html'));
// });

app.listen(3000); //listens on port 3000 -> http://localhost:3000/

// /test with schema of username, first, last name, password, email
// enter information into database


module.exports = app;
