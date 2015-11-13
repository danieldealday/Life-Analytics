var mongoose = require('mongoose');
var schema = mongoose.Schema;
var promise = require('bluebird');
var accountSid = 'ACf2ed6200fbd257f99f12b335d4cd912e';
var authToken = '006148567c8e9b1a9ab08e8e1f72b36f';
var client = require('twilio')(accountSid, authToken);
var User = require('./../User/userModel');


var messageController = {
 //sends a text message asking if you achieved your goal today;
 sendText: function(){
   client.messages.create({
     to: '+18183260431',
     from: '+18189283024',
     body: 'Did you achieve your goal today?',
   }, function(err, message) {
         console.log(message.sid);     
   });
 },

 //processes the response from the user
 getResponse: function(){
   console.log('get response is working')
   //gets messages from twilio
   var getMessageswithBluebird = function(messages){
     return new Promise(function(resolve,reject){
       client.messages.list({},function(err,data){
         if (err) console.log(err);
         else{
           var theMessages = data;
           resolve(theMessages);
         }
       });
     });
   };
   //then accesses the database to update information
   getMessageswithBluebird().then(function(theMessages){
     var responsetext = theMessages.messages[1].body;
     console.log(responsetext);
     
     //if response is yes, increase streak by 1
     if(responsetext.toLowerCase() === 'yes' ){
       User.findOne({firstName: 'susan'},function(error,user){
         if(error) console.log(error);
         else {
           console.log(user.streak);
           var currentStreak = user.streak;
           var newStreak = {
             streak: currentStreak+1
           };
     
           User.update({ firstName: 'susan' }, newStreak , { upsert: true }, function(err, result) {
             if (err) console.log(err);
             else {
               console.log(result);
               console.log('streak went up by 1');
             }
           });
         }
       });
     } else {
      
       //if User responds with anything other than yes, reset streak to zero
       User.findOne({firstName: 'susan'}, function(error,user){
         if(error) console.log(error);
         else {
           console.log(user.streak);
           var currentStreak = user.streak;
           var newStreak = {
             streak: 0
           };
     
           User.update({ firstName: 'susan' },newStreak , { upsert: true }, function(err, result) {
             if (err) console.log(err);
             else {
               console.log(result);
               console.log('streak cleared');
             }
           });
         }
       });  
     }    
   });
 }
}

module.exports = messageController;