'use strict';

import * as test from 'tape';
import { Apple } from './apples';


test('print apple', t => {
  let alma = new Apple;
  let result = alma.getApple();

  t.equal(result, 'apple');
  t.end();
});