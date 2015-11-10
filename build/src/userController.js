
var User = require('./userModel');
var express = require('express');
var mongoose = require('mongoose');

// var User = require('./userModel');
// var express = require('express');
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser');

// var userController = {};
// userController.createUser = createUser;
// userController.postTasks = postTasks;

function createUser (req, res, next) {
  var user = {
    firstName: req.body.signUpFirstName,
    lastName: req.body.signUpLastName,
    email: req.body.signUpEmail,
    password: req.body.signUpPassword,
    applicationData: {
      personalData: {
        habits: [],
        cumulative: {type: Number},
        weeklyTotal: {type: Number},
        weeklyContribution: {type: Number},
        bonus: undefined
      },
      professionalData: {
        habits: [],
        cumulative: {type: Number},
        weeklyTotal: {type: Number},
        weeklyContribution: {type: Number},
        bonus: undefined
      },
      financialData: {
        habits: [],
        cumulative: {type: Number},
        weeklyTotal: {type: Number},
        weeklyContribution: {type: Number},
        bonus: undefined
      }
    }
  };
  User.create(user, function (error) {
    if (error) {
      return res.redirect('/');
    }
    next();
  });
}


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

