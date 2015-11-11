var request = require('supertest');
var app = require('./../server/server');
var expect = require('chai').expect;
// var Cookies = require('cookies');
// var Session = require('./../server/session/sessionModel');
var User = require('./../server/User/userModel');
// var bcrypt = require('bcryptjs');


describe('Authentication', function() {

  // for use when setting ssid cokie
  var id;
  before(function(done) {
    User.remove({}, function() {
      console.log("Test Database Cleared");
      done();
    });
  })  
  describe('Creating users', function() {
    it('GET request to /messages return status code of 200', function(done) {
      request(app)
        .get('/')
        .expect(200,done);
    }); 


    it('POST request to "/create" route with correctly formatted body creates a user', function(done) {
      request(app)
        .post('/create')
        .send({"firstName": "firstName1", "password" : "password1" })
        .type('form')
        .end(function(err, res) {
          User.findOne({username: 'test1'}, function(err, user) {

            // for use when setting ssid cookie
            // id = user._id;

            expect(err).to.be.null;
            expect(user).to.be.truthy;
            done();
          });
        });
    });

    it('POST request to "/signup" route with incorrectly formatted body should redirect to "/signin" with an error message', function(done) {
        request(app)
          .post('/signup')
          .send({"username": "test2"})
          .type('form')
          .end(function(err, res) {
            expect(res.text.match(/Error/)).to.not.be.null;
            done();
          });
    });

    it('POST request to "/login" route with correctly formated correct information redirects to "/secret"', function(done) {
      request(app)
        .post('/login')
        .type('form')
        .send({"username": "test1", "password" : "password1"})
        .end(function(err, res) {
          expect(res.headers['location']).to.eql('/secret');
          done();
        });
    });

    //todo write more test that sends error if login incorrect

  })

  describe('Cookies',function() {
    it('Header has cookie name of "codesmith"', function(done) {
      request(app)
        .get('/')
        .expect('set-cookie',/codesmith=/, done)
    });

    it('"codesmith" cookie has value of "hi"', function(done) {
      request(app)
        .get('/')
        .expect('set-cookie',/hi/, done);
    });

    it('Header has a cookie name "secret"', function(done) {
      request(app)
        .get('/')
        .expect('set-cookie', /secret=/, done)
    });

    it('"secret" cookie has a random value from 0-99', function(done) {
      var oldNumber;
      var newNumber;
      var cookies;
      request(app)
        .get('/')
        .end(function(err, res) {
          oldNumber = getCookie(res.headers['set-cookie'],'secret')
          request(app)
            .get('/')
            .end(function(err, res) {
              newNumber = getCookie(res.headers['set-cookie'],'secret');
              expect(newNumber).to.be.within(0,99);
              expect(oldNumber).to.be.within(0,99);
              expect(newNumber).to.not.eql(oldNumber);
              done();
            })
        });
    });

    it('Header has a cookie named "ssid" when a user successfully logins', function(done) {
      request(app)
        .post('/login')
        .type('form')
        .send({"username": "test1", "password" : "password1"})
        .expect('set-cookie', /ssid=/, done);
    });

    it('"ssid" cookie has value of user', function(done) {
      var regex = new RegExp(id);
      request(app)
        .post('/login')
        .type('form')
        .send({"username": "test1", "password" : "password1"})
        .expect('set-cookie', regex, done);
    });
  });

  describe('Sessions', function() {
    it('Create a session when a user creates an account', function(done) {
      request(app)
        .post('/signup')
        .type('form')
        .send({username: 'test2', password: 'password2'})
        .end(function(err, res) {
          User.findOne({username: 'test2'}, function(err, user) {
            Session.findOne({cookieId: user._id}, function(err, session) {
              expect(err).to.be.null;
              expect(session).to.be.truthy;
              done();
            });
          });
        });
    });

    it('Create a session when a user logins to an account', function(done) {
      request(app)
        .post('/login')
        .type('form')
        .send({username: 'test2', password: 'password2'})
        .end(function(err, res) {
          User.findOne({username: 'test2'}, function(err, user) {
            Session.findOne({cookieId: user._id}, function(err, session) {
              expect(err).to.be.null;
              expect(session).to.be.truthy;
              done();
            });
          });
        });
    });
  });

  //too write more tests
  describe('Blocking certain pages', function() {
    it('Block "/secret" if session not active', function(done) {
     request(app)
       .get('/secret')
       .end(function(err, res) {
        expect(res.text.match(/Secret/g)).to.be.null;
        done();
       });
    });
    it('Redirects from "/secret" to "/signup" if session not active', function(done) {
     request(app)
       .get('/secret')
       .end(function(err, res) {
        expect(res.text.match(/Signup/g)).to.be.truthy;
        done();
       });
    });
  });

  describe('Bcrypt', function() {
    it('Passwords should not be stored in plaintext', function(done) {
      request(app)
        .post('/signup')
        .send({"username": "test3", "password" : "password3"})
        .type('form')
        .end(function(err, res) {
          User.findOne({username: 'test3'}, function(err, user) {
            expect(user.password).to.not.eql('password3');
            done();
          });
        });
    });

    it('Passwords be bcrypted', function(done) {
      request(app)
        .post('/signup')
        .send({"username": "test4", "password" : "password4"})
        .type('form')
        .end(function(err, res) {
          User.findOne({username: 'test4'}, function(err, user) {
            expect(bcrypt.compareSync('password4',user.password)).to.be.true;
            done();
          });
        });
    });

  });

});

function getCookieValue(cookie) {
  return cookie[0].split(';')[0].split('=')[1];
}

function getCookie(cookieArray, name) {
  return getCookieValue(cookieArray.filter(function(el) {
    return el.split(';')[0].split('=')[0] === name;
  }));
}