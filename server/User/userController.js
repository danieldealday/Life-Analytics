
var User = require('./userModel');
var express = require('express');
var mongoose = require('mongoose');

// var User = require('./userModel');
// var express = require('express');
// var mongoose = require('mongoose');

// var bodyParser = require('body-parser');

var userController = {

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
        res.redirect('/');
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





module.exports = userController;
