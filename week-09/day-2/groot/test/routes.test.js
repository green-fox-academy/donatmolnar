'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../routes');

describe('Groot translator', () => {
   it('GET /groot returns received and translated', () => {
     request(app)
     .get('/groot')
     .send({"message": "Someting"})
     .expect(200)
     .end((err, res) => {
         if(err) {
           expect(400);
         } else {
           expect(res.body[0].translated).to.equal('I am Groot!');
         }
     });
    });

   it('GET /groot returns error when message is undefined', () => {
     request(app)
     .get('/groot')
     .end((err, res) => {
       expect(400, {"error": "I am Groot!"});
     });
   });
});
