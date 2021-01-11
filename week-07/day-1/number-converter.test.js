'use strict';

const test = require('tape');
const numberConverter = require('./number-converter.js');

test('convert one digit number', (t) => {
  let actual = numberConverter(1);
  let expected = 'one';

  t.equal(actual, expected);
  t.end();
});

test('convert two digit number between 10 and 19', (t) => {
  let actual = numberConverter(13);
  let expected = 'thirteen';

  t.equal(actual, expected);
  t.end();
});