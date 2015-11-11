var request = require('supertest');
var app = require('./../server/server.js');
var expect = require('chai').expect;
// var Cookies = require('cookies');
//var Session = require('./../src/userController.js');
// var User = require('./../server/user/userModel');
// var bcrypt = require('bcryptjs');

describe('Authentication', function() {
    it('POST request to "/signup" route with incorrectly formatted body should redirect to "/signin" with an error message', function(done) {
        request(app)
          .post('/create')
          .send({"firstName": "test1", "lastName": "bill", "password" : "password1", "email": "email", "goal": "goal" })
          .type('form')
          .end(function(err, res) {
            expect(res.text.match(/Error/)).to.not.be.null;
            done();
          });
    });

//   // for use when setting ssid cokie
//   var id;
//   before(function(done) {
//     User.remove({}, function() {
//       Session.remove({}, function() {
//         console.log("Test Database Cleared");
//         done();
//       });
//     });
//   })
//   describe('Creating users', function() {
    // it('POST request to "/signup" route with correctly formatted body creates a user', function(done) {
    //   request(app)
    //     .post('/signup')
    //     .send({"username": "test1", "password" : "password1"})
    //     .type('form')
    //     .end(function(err, res) {
    //       User.findOne({username: 'test1'}, function(err, user) {

    //         // for use when setting ssid cookie
    //         id = user._id;

    //         expect(err).to.be.null;
    //         expect(user).to.be.truthy;
    //         done();
    //       });
    //     });
    // });

    // it('POST request to "/signup" route with incorrectly formatted body should redirect to "/signin" with an error message', function(done) {
    //     request(app)
    //       .post('/signup')
    //       .send({"username": "test2"})
    //       .type('form')
    //       .end(function(err, res) {
    //         expect(res.text.match(/Error/)).to.not.be.null;
    //         done();
    //       });
    // });

    // it('POST request to "/login" route with correctly formated correct information redirects to "/secret"', function(done) {
    //   request(app)
    //     .post('/login')
    //     .type('form')
    //     .send({"username": "test1", "password" : "password1"})
    //     .end(function(err, res) {
    //       expect(res.headers['location']).to.eql('/secret');
    //       done();
    //     });
    // });

    //todo write more test that sends error if login incorrect

//   })

})