
var User = require('./userModel');
var express = require('express');
var mongoose = require('mongoose');

// var User = require('./userModel');
// var express = require('express');
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser');

var userController = {
// userController.createUser = createUser;
// userController.postTasks = postTasks;

  createUser: function (req, res) {

    User.create(req.body, function (error, results) {
      console.log("recording", req.body);
      if (error) {
        console.log(error);
        // return res.redirect('/');
      }
      else {
        console.log(results);
        console.log("User saved");
      }
    });
  }
};


// function verifyUser (req, res) {
//   var credentials = req.body;
//   User.find(req.body, function (err, userData) {
//     if (err) {
//       res.redirect('/');
//     }
//     return res.redirect('/dashboard');
//   });
// }

// function updateUserData () {

// }


// module.exports = taskController;

module.exports = userController;

