'use strict';

import * as test from 'tape';
import { Sharpie } from './../../week-03/day-3/sharpie';

let pen = new Sharpie('black', 1);

test('check ink amount after usage', (t) => {
  pen.use();
  pen.use();

  t.equal(pen.getInkAmount(), 98);
  t.end();
});
