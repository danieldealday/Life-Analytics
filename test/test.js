var React = require('react/addons');
var Chai = require('chai');
var request = require('supertest');
var expect = require('chai').expect;
var app = require('./../server/server.js');
var User = require('./../server/User/userModel');
// var questionnaire = require('./../src/components/questionnaire.jsx');
var TestUtils = React.addons.TestUtils;

//
describe('Creating users', function() {

  before(function(done) {
    User.remove({}, function() {
      console.log('database cleared!');
      done();
    })
  })

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
        .expect(200, done());
    });
  });

// describe('Render Page', function() {
//   before(function() {
//     var shallowRenderer = TestUtils.createRenderer();
//     shallowRenderer.render(React.createElement(Page));
//     var component = shallowRenderer.getRenderOutput();
//   })
//   it('should be a div', function() {
//     expect(component.type).to.equal('div');
//   })
// })









  // describe('POST request to "/login" route with incorrect information redirects to "/"', function() {
  //   it('should respond with route url', function(done) {
  //     request(app)
  //     .post('/login')
  //     .send({"email": "leokee@facebook.com", "password": "hi"})
  //     .end(function(err, res) {
  //       User.findOne({"email": "leokee@facebook.com", "password": "hello"}, function(err, user) {
  //         expect(err).to.be.null;
  //         expect('/');
  //         done();
  //     });
  //     });
  //   });
  // });
