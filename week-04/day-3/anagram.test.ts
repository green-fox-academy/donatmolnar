'use strict';

import * as test from 'tape';
import { checkAnagram } from './anagram';

test('empty anagram', (t) => {
  let actual = checkAnagram('', '');

  t.equal(actual, false);
  t.end();
});

test('same words', (t) => {
  let actual = checkAnagram('tag', 'tag');

  t.equal(actual, false);
  t.end();
});

test('true anagram', (t) =>{
  let actual = checkAnagram('creative', 'reactive');

  t.equal(actual, true);
  t.end();
})

test('same length not anagrams', (t) => {
  let actual = checkAnagram('star', 'wars');

  t.equal(actual, false)
  t.end();
})

test('similar but different length', (t) => {
  let actual = checkAnagram('one', 'ones');

  t.equal(actual, false);
  t.end();
})