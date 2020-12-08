'use strict';

import { Flyable } from '../flyable/flyable';
import { Animal } from './animal';

export class Bird extends Animal implements Flyable {
  constructor(name: string, age?: number) {
    super(name, age);
  }

  public breed(): string {
    return 'laying eggs.';
  }

  public land(): void {
    console.log('Rapidly decreasing altitude.');
  }

  public fly(): void {
    console.log('I believe I can.');
  }

  public takeOff() {
    console.log('Fasten your seatbelts.');
  }
}
