'use strict';

const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('reddit backend endpoints', () => {
  it('GET / returns with Connection established', () => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          expect(500);
        } else {
          expect(res.body.status).to.equal(`Connection established: postman has been reached by the server`);
        }
      });
  });

  it('GET /posts return with active post', () => {
    request(app)
      .get('/posts')
      .expect(200)
      .end((err, res) => {
        if (err) {
          expect(500);
        } else {
          expect(res.body[0].is_active).to.equal(true);
        }
      });
  });

  it('POST /posts returs with the added post', () => {
    request(app)
      .post('/posts')
      .send({title: 'Post added by server.test.js', url: 'https://placeholder.com/', owner: 'admin'})
      .expect(200)
      .end((err, res) => {
        if (err) {
          expect(500);
        } else {
          expect(res.body[0].title).to.equal('Post added by server.test.js');
          expect(res.body[0].url).to.equal('https://placeholder.com/');
          expect(res.body[0].owner).to.equal('admin');
        }
      });
  });
});
