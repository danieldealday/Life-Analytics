var express = require('express');
// var user = require('./User/User.js')
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var app = express();
var path = require('path');
mongoose.connect('mongodb://localhost/userInfo');
mongoose.connection.once('open', function() {
	console.log('Connected with MongoDB ORM - mongodb-orm');
});

// var userInfo = new Schema({
// 	username: { type: String, unique: true },
// 	firstName: { type: String unique: true },
// 	lastName: { type: String, unique: true },
// 	password: { type: String, unique: true },
// 	email: { type: String, unique: true }
// });

app.use(express.static(path.join(__dirname, './../client/')));
// app.use(bodyParser());
app.post('/create', function(req,res) {
	console.log('ITW WORKSs');
	res.send(200);
})
// app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, './../client/index.html'));
// });


app.listen(3000); //listens on port 3000 -> http://localhost:3000/

// /test with schema of username, first, last name, password, email
// enter information into database

module.exports = app;
