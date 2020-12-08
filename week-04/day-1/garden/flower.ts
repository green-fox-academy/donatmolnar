'use strict';

import { Plant } from './plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(0.75, 5, color, 'Flower');
  }
}
