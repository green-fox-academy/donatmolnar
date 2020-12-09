'use strict';

import * as test from 'tape';
import { Sum } from './sum';

let sum = new Sum();
let emptyArray: number[] = [];
let oneElementArray: number[] = [1];
let multipleElementArray: number[] = [1, 2, 3, 1024];

test('empty array sum', (t) => {
  let actual: number = sum.sum(emptyArray);

  t.equal(actual, 0);
  t.end();
});

test('one element array sum', (t) => {
  let actual: number = sum.sum(oneElementArray);

  t.equal(actual, 1);
  t.end();
});

test('multiple element array sum', (t) => {
  let actual: number = sum.sum(multipleElementArray);

  t.equal(actual, 1030);
  t.end();
});
