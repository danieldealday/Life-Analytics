var request = require('supertest');
var app = require('../server/server');
var expect = require('chai').expect;


describe('Express', function() {
  describe('Creating routes', function(done) {
    it('GET request to / return status code of 200', function() {
      request(app)
        .get('/')
        .expect(200,done);
    });
  });
});
