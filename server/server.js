var express = require('express');
var User = require('./User/userModel');
var userController = require('./User/userController');
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var app = express();
var promise = require('bluebird');
var accountSid = 'ACf2ed6200fbd257f99f12b335d4cd912e';
var authToken = '006148567c8e9b1a9ab08e8e1f72b36f';
var client = require('twilio')(accountSid, authToken);
// var userModel = require('./User/userModel');
var path = require('path');
mongoose.connect('mongodb://localhost/userInfo');
mongoose.connection.once('open', function() {
	console.log('Connected with MongoDB ORM - mongodb-orm');
	//userController.postData();
});



//sends a text message asking if you achieved your goal today;
// var messageId = '';
//
      // client.messages.create({
      //   to: '+18183260431',
      //   from: '+18189283024',
      //   body: 'Did you achieve your goal today?',
      // }, function(err, message) {
      //   messageId = message.sid;
      //       console.log(message.sid);
			//
			//
      // });


// setTimeout(function(){
// var getMessageswithBluebird = function(messages){
// 	return new Promise(function(resolve,reject){
// 		client.messages.list({},function(err,data){
// 			if (err){
// 				console.log(err);
// 			}else{
// 				var theMessages = data;
// 				resolve(theMessages);
// 			}
// 		});
//
// 	});
// };
// getMessageswithBluebird().then(function(theMessages){
// 	var responsetext = theMessages.messages[1].body;
// 	console.log(responsetext);
//
// if(responsetext === 'Yes' ){
// 	User.findOne({firstName: 'Leonard'},function(error,user){
// 		if(error){
// 			console.log(error);
// 		}else{
// 			console.log(user.streak);
// 			var currentStreak = user.streak;
// 			var newStreak = {
// 				streak: currentStreak+1
// 			};
//
// 			User.update({ firstName: 'Leonard' },newStreak , { upsert: true }, function(err, result) {
// 				if (err) {
// 					console.log(err);
// 				}
// 				else {
// 					console.log(result);
// 					console.log('streak went up by 1');
// 				}
// 			});
// 		}
// 	});
// }else{
// 	User.findOne({firstName: 'Leonard'},function(error,user){
// 		if(error){
// 			console.log(error);
// 		}else{
// 			console.log(user.streak);
// 			var currentStreak = user.streak;
// 			var newStreak = {
// 				streak: 0
// 			};
//
// 			User.update({ firstName: 'Leonard' },newStreak , { upsert: true }, function(err, result) {
// 				if (err) {
// 					console.log(err);
// 				}
// 				else {
// 					console.log(result);
// 					console.log('streak cleared');
// 				}
// 			});
// 		}
// 	});
//
//
// }



//
// });
// },20000);





app.use(express.static(path.join(__dirname, './../client/')));


app.post('/create', userController.createUser);
app.post('/login', userController.verifyUser);
app.post('/updateStreak', userController.updateUserInfo);



app.post('/postQuestion', userController.updateUserInfo);




app.listen(3000); //listens on port 3000 -> http://localhost:3000/

// /test with schema of username, first, last name, password, email
// enter information into database


module.exports = app;
