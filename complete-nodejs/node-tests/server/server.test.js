const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// server
    // GET /
    // GET /users

describe('server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users/', () => {
    it('/users should return my user', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Scott Rallya',
            age: 33
          });
        })
        .end(done)
      });
    });
});
