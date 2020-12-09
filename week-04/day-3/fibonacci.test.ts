'use strict';

import * as test from 'tape';
import { fibonacci } from './../../week-03/day-5/fibonacci';

test('fibonacci nth number', (t) => {
  let actual = fibonacci(5);

  t.equal(actual, 5);
  t.end();
});

test('high nth of fibonacci', (t) => {
  let actual = fibonacci(20);

  t.equal(actual, 6765);
  t.end();
});