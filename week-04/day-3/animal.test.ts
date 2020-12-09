'use strict';

import * as test from 'tape';
import { Animal } from './../../week-03/day-3/animal';

let simba = new Animal();

test('hunger after eat drink play', (t) => {
  simba.eat();
  simba.drink();
  simba.play();
  let actual = simba.getHunger();

  t.equal(actual, 50);
  t.end();
});

test('thirst after eat drink play', (t) => {
  simba.eat();
  simba.drink();
  simba.play();
  let actual = simba.getThirst();

  t.equal(actual, 50);
  t.end();
});

test('fat simba', (t) => {
  let x: number = 1;
  while (x <= 50) {
    simba.eat();
    x++;
  }

  let actual = simba.getHunger();

  t.equal(actual, 0);
  t.end();
});

test('well hydrated simba', (t) => {
  let x: number = 1;
  while (x <= 50) {
    simba.drink();
    x++;
  }

  let actual = simba.getThirst();

  t.equal(actual, 0);
  t.end();
});
