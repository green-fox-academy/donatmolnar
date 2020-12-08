'use strict';

import { Animal } from "./animal";

export class Reptile extends Animal {

  constructor(name: string, age?: number) {
    super(name, age);
  }

  public breed(): string {
    return 'laying eggs.';
  }
}