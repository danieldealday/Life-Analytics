
var request = require('supertest');
// var app = require('./../server/server');
var expect = require('chai').expect;
// var Cookies = require('cookies');
// var Session = require('./../server/session/sessionModel');
// var User = require('./../server/user/userModel');
// var bcrypt = require('bcryptjs');
var app = require('./../server/server.js');
var User = require('./../server/User/User');

//
describe('Creating users', function() {
  it('POST request to "/create" route with correctly formatted body creates a user', function(done) {
    request(app)
      .post('/create')
      .send({"firstName": "Bryan", "lastName" : "Truong" , "password" : "password1", "email" : "bht@gmai.com"})
      .end(function(err, res) {
        User.findOne({"email": 'bht@gmai.com'}, function(err, user) {
          expect(err).to.be.null;
          expect(user).to.be.truthy;
          done();
        });
      });
    });
  });

  describe('GET index.html', function() {
    it('should respond to GET request for / with 200', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
