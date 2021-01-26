'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');
​
describe('Groot translator', () => {
  it('GET /groot returns received and translated', () => {
    // TODO: implement it
    request(app)
    .get('/groot')
    .send({"message": "Someting"})
    .expect(200)
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res.body[0].translated).to.equal('I am Groot!');
    });
  });

  it('GET /groot returns error when message is undefined', () => {
    request(app)
    .get('/groot')
    .expect(400)
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res.body[0].error).to.be.equal('I am Groot!');
    });
  });
});
