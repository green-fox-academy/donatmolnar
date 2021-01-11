'use strict';

// ES6 import getIndex from './getIndex';

const test = require('tape');
const getIndex = require('./getindex');

test('Should return -1, if the list is empty', t => {
  const list = [];
  const value = 5;
  const actual = getIndex(list, value);
  const expected = - 1;

  t.equal(actual, expected);
  t.end();
});

test('Should return -1, if the item is not in the list', t => {
  const list = [1, 2, 3, 4];
  const value = 5;
  const actual = getIndex(list, value);
  const expected = - 1;

  t.equal(actual, expected);
  t.end();
});

test('Should return the index if the value is in the list', t => {
  const list = [1, 2, 3, 4, 5];
  const value = 5;
  const actual = getIndex(list, value);
  const expected = 4;

  t.equal(actual, expected);
  t.end();
});
