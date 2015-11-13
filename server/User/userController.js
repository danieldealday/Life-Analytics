var User = require('./userModel');
var express = require('express');
var mongoose = require('mongoose');

// var User = require('./userModel');
// var express = require('express');
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser');

var userController = {

  createUser: function(req,res) {
    var userinfo = '';
    req.on('data', function(chunk) {
      userinfo += chunk;
    });

    req.on('end',function() {
      User.create(JSON.parse(userinfo), function(error) {
        if (error) {
          console.log(error);
        } else {
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
      User.update({ email: updateUserInfo.email }, updateUserInfo, { upsert: true }, function(err, result) {
        if (err) {
          console.log(err);
        }
        else {
          console.log(result);
          console.log("yay");
          res.send(result);
          // res.redirect('/dashboard');
        }
      });
    });
  },

  verifyUser: function(req, res) {
    var sentInfo = '';
    req.on('data', function(chunk) {
      sentInfo += chunk;
    });
    req.on('end', function() {
      sentInfo = JSON.parse(sentInfo);

      User.findOne({ email: sentInfo.email }, function(error, user) {
        if(error || user === null) {
          res.sendStatus(404);
        }
        else if (sentInfo.password === user.password) {
          res.send(user);
          console.log('you logged in');
        }
        else {
          res.sendStatus(404);
        }
      }); // closes User.findOne
    });
  }



};
  // User.create(user, function (error) {
  //   if (error) {
  //     return res.redirect('/');
  //   }
  //   next();
  // });
module.exports = userController;
