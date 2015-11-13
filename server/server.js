var express = require('express');
var app = express();
var User = require('./User/userModel');
var userController = require('./User/userController');
var messageController = require('./Messages/messageController')
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var CronJob = require('cron').CronJob;
var path = require('path');
var mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/test' : 'mongodb://localhost/userInfo';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
    console.log('Connected with MongoDB ORM - mongodb-orm');
});

// messageController.sendText();

// setTimeout(function(){
// 	messageController.getResponse();
// }, 20000)

// new CronJob('1 * * * * *', function(){
//   messageController.getResponse();
// }, null, true, 'America/Los_Angeles');

app.use(express.static(path.join(__dirname, './../client/')));
app.post('/create', userController.createUser);
app.post('/login', userController.verifyUser);
app.post('/updateStreak', userController.updateUserInfo);
app.post('/postQuestion', userController.updateUserInfo);

app.listen(3000); //listens on port 3000 -> http://localhost:3000/


module.exports = app;