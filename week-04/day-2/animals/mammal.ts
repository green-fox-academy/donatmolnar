'use strict';

import { Animal } from './animal';

export class Mammal extends Animal {

  constructor(name: string, age?: number) {
    super(name, age); 
  }

  public breed(): string {
    return 'pushing miniature versions out.';
  }
}