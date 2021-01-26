'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('./server');

describe('Yondu arrow speed calculator', () => {
   it('GET /yondu calculates the speed', () => {
     request(app)
     .get('/yondu?distance=100&time=10')
     .expect(200)
     .end((err, res) => {
         if(err) {
           expect(400);
         } else {
           expect(res.body.distance).to.equal('100');
           expect(res.body.time).to.equal('10');
           expect(res.body.speed).to.equal('10');
         }
     });
    });

   it('GET /yondu returns with error message when parameter is missing', () => {
     request(app)
     .get('/yondu')
     .end((err, res) => {
       expect(400, { error: 'missing parameters' });
     });
   });

   it('GET /yondu returns with error message when parameter is <= 0', () => {
    request(app)
    .get('/yondu?distance=100&time=0')
    .end((err, res) => {
      expect(400, { error: 'distance and time must be greater than 0' });
    });
  });
});
