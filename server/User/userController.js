var User = require('./userModel');
var express = require('express');
var mongoose = require('mongoose');

// var User = require('./userModel');
// var express = require('express');
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser');

var userModel = {

  createUser : function (req,res) {
    var userinfo = '';
    req.on('data', function(chunk) {
      userinfo += chunk;
    });
    req.on('end',function(){
      User.create(JSON.parse(userinfo), function(error){
        if(error){
          console.log(error);
        }else{
          console.log('User saved');
          res.send();
        }
      });
    });
  },
  updateUserInfo: function(req, res) {
    var updateUserInfo = '';
    req.on('data', function(chunk) {
      updateUserInfo += chunk;
    });
    req.on('end', function() {
      updateUserInfo = JSON.parse(updateUserInfo);
      User.update({email: updateUserInfo.email}, updateUserInfo, {upsert: true}, function(err, result) {
        if(err) {
          console.log(err);
        }
        else {
          console.log(result);
          console.log("yay");
          res.send();
          // res.redirect('/dashboard');
        }
      });
    });
  }

};
  // User.create(user, function (error) {
  //   if (error) {
  //     return res.redirect('/');
  //   }
  //   next();
  // });
module.exports = userModel;
