'use strict';

import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(color: string) {
    super(0.4, 10, color, 'Tree')    
  }
}